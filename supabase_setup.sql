-- SQL Setup for ArabiyPro Supabase Database

-- 1. Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 0,
  coins INTEGER DEFAULT 0,
  completed_lessons JSONB DEFAULT '[]',
  is_premium BOOLEAN DEFAULT false,
  premium_expires_at TIMESTAMP WITH TIME ZONE,
  is_chat_premium BOOLEAN DEFAULT false,
  chat_premium_expires_at TIMESTAMP WITH TIME ZONE,
  trial_status TEXT DEFAULT 'active',
  trial_start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create device_activity table
CREATE TABLE IF NOT EXISTS device_activity (
  id BIGSERIAL PRIMARY KEY,
  device_id TEXT NOT NULL,
  activity_date DATE DEFAULT CURRENT_DATE,
  open_count INTEGER DEFAULT 0,
  ai_chat_count INTEGER DEFAULT 0,
  activation_code TEXT,
  last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_flagged BOOLEAN DEFAULT false,
  flag_reason TEXT,
  is_blocked BOOLEAN DEFAULT false,
  blocked_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_device_activity_device_id ON device_activity(device_id);
CREATE INDEX IF NOT EXISTS idx_device_activity_date ON device_activity(activity_date);
CREATE INDEX IF NOT EXISTS idx_device_activity_blocked ON device_activity(is_blocked);

-- 4. Set up Row Level Security (RLS)
-- Note: You may need to adjust these based on your specific security needs
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE device_activity ENABLE ROW LEVEL SECURITY;

-- Allow users to see and update their own profile
CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);

-- For device_activity, if you want public tracking (be careful with this in production):
CREATE POLICY "Allow public insert for device tracking" ON device_activity FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select for device tracking" ON device_activity FOR SELECT USING (true);
CREATE POLICY "Allow public update for device tracking" ON device_activity FOR UPDATE USING (true);
