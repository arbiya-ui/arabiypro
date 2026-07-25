import { supabase, isSupabaseConfigured } from './supabase';

export const getDeviceId = (): string => {
  let deviceId = localStorage.getItem('arabiypro_device_id');
  if (!deviceId) {
    // Basic fallback if randomUUID is not available (though it is in modern browsers)
    deviceId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('arabiypro_device_id', deviceId);
  }
  return deviceId;
};

export const logAppOpen = async (activationCode?: string) => {
  if (!isSupabaseConfigured) return;

  const deviceId = getDeviceId();
  const today = new Date().toISOString().split('T')[0];

  try {
    // MENGGUNAKAN SDK RESMI: supabase.from()
    const { data, error } = await supabase
      .from('device_activity')
      .select('*')
      .eq('device_id', deviceId)
      .eq('activity_date', today)
      .maybeSingle();

    if (error) {
      if (error.code === '42P01') {
        console.warn('Supabase: device_activity table not found. Please run the setup SQL in supabase_setup.sql');
      } else {
        console.error('Error fetching device activity:', error.message, '| Code:', error.code, '| Details:', error.details);
      }
      return;
    }

    if (data) {
      // UPDATE via SDK
      await supabase
        .from('device_activity')
        .update({ 
          open_count: (data.open_count || 0) + 1,
          activation_code: activationCode || data.activation_code,
          last_active_at: new Date().toISOString()
        })
        .eq('id', data.id);
    } else {
      // INSERT via SDK
      await supabase
        .from('device_activity')
        .insert({
          device_id: deviceId,
          activity_date: today,
          open_count: 1,
          ai_chat_count: 0,
          activation_code: activationCode,
          last_active_at: new Date().toISOString()
        });
    }
  } catch (err) {
    console.error('Failed to log app open:', err);
  }
};

export const logAiChatUsage = async (activationCode?: string) => {
  if (!isSupabaseConfigured) return;

  const deviceId = getDeviceId();
  const today = new Date().toISOString().split('T')[0];

  try {
    // MENGGUNAKAN SDK RESMI: supabase.from()
    const { data, error } = await supabase
      .from('device_activity')
      .select('*')
      .eq('device_id', deviceId)
      .eq('activity_date', today)
      .maybeSingle();

    if (error) {
      if (error.code === '42P01') {
        console.warn('Supabase: device_activity table not found.');
      } else {
        console.error('Error fetching activity in logAiChatUsage:', error.message || error, '| Code:', error.code);
      }
      return;
    }

    if (data) {
      // UPDATE via SDK
      await supabase
        .from('device_activity')
        .update({ 
          ai_chat_count: (data.ai_chat_count || 0) + 1,
          activation_code: activationCode || data.activation_code,
          last_active_at: new Date().toISOString()
        })
        .eq('id', data.id);
    } else {
      // INSERT via SDK
      await supabase
        .from('device_activity')
        .insert({
          device_id: deviceId,
          activity_date: today,
          open_count: 1,
          ai_chat_count: 1,
          activation_code: activationCode,
          last_active_at: new Date().toISOString()
        });
    }
  } catch (err) {
    console.error('Failed to log AI chat usage:', err);
  }
};

export const checkDeviceBlocked = async (): Promise<{ isBlocked: boolean; reason: string | null }> => {
  if (!isSupabaseConfigured) return { isBlocked: false, reason: null };

  const deviceId = getDeviceId();

  try {
    // MENGGUNAKAN SDK RESMI: supabase.from()
    const { data, error } = await supabase
      .from('device_activity')
      .select('is_blocked, blocked_reason')
      .eq('device_id', deviceId)
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      if (error.code === '42P01') {
        console.warn('Supabase: device_activity table not found.');
      } else {
        console.error('Error checking device status:', error.message, '| Code:', error.code, '| Details:', error.details);
      }
      return { isBlocked: false, reason: null };
    }

    return {
      isBlocked: !!data?.is_blocked,
      reason: data?.blocked_reason || null
    };
  } catch (err) {
    console.error('Failed to check device block:', err);
    return { isBlocked: false, reason: null };
  }
};
