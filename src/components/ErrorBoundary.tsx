import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F9F8] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h1 className="text-2xl font-black text-[#0B3D2E] mb-2 uppercase tracking-tight">Terjadi Kesalahan</h1>
            <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">
              Maaf, aplikasi mengalami kendala teknis. <br/>
              <span className="font-mono text-[10px] bg-rose-50 text-rose-600 px-2 py-1 rounded mt-2 inline-block">
                {this.state.error?.message || "Error tidak diketahui"}
              </span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-[#D4AF37] text-white font-black rounded-2xl shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest text-xs"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
