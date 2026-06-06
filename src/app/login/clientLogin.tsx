"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Loader2,
  Mail,
  Lock,
  AlertCircle,
} from "lucide-react";
import { EstateAILoading } from "@/components/loadingpages/loginLoding";

// ── Types ───────────────────────────────────────────────────────────────
interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

// ── Main Component ────────────────────────────────────────────────────
export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
const router = useRouter();
const { admin, isLoading, login } = useAuth();
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
 const[loading,setLoading]= useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
useEffect(() => {
  if (admin) {
    if (admin.role === "administrator") {
      router.push("/admin-dashboard");
    } else {
      router.push("/login");
    }
  }
}, [admin, router]);

  if (isLoading || loading) {
    return (
      <EstateAILoading message="Loading your Dashboard..."/>
    );
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

 setLoading(true);

await login({
  email: formData.email,
  password: formData.password,
});

setLoading(false);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // if (isSuccess) {
  //   return (
  //     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 px-4">
  //       <div className="w-full max-w-md text-center animate-in fade-in zoom-in-95 duration-500">
  //         <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 p-10">
  //           <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
  //             <CheckCircle2 className="w-10 h-10 text-emerald-500" />
  //           </div>
  //           <h2 className="text-2xl font-bold text-slate-900 mb-3">Welcome Back!</h2>
  //           <p className="text-slate-500 mb-8 leading-relaxed">
  //             You've successfully signed in. Redirecting you to your Creatik AI dashboard...
  //           </p>
  //           <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
  //             <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-[shimmer_2s_infinite]" 
  //                  style={{ width: '100%', animation: 'shimmer 2s ease-in-out infinite' }} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 flex items-center justify-center px-4 py-12">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      {/* logo creatikai */}
 <Link href="/" className="hidden  absolute left-10 top-10 sm:inline-flex items-center gap-2.5 mb-6 group">
            <div className="relative">
              <Image
                src="/creatikai-logo.png"
                alt="Creatik AI"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <Sparkles className="w-3 h-3 text-indigo-400 absolute -top-1 -right-1" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Creatik <span className="text-indigo-600 font-extrabold">AI</span>
            </span>
          </Link>
      <div className="w-full max-w-lg relative z-10">
        
        {/* Logo & Header */}
        <div className=" text-center mb-8 ">
         
          <h1 className="text-3xl font-bold text-slate-900 mb-2  ">Sign In</h1>
          <p className="text-slate-500 text-sm">
            Welcome back! Please enter your details to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 p-8 md:p-10">
          {/* Google Sign In */}
          <button
            type="button"
            className="w-full hidden sm:flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all duration-200 mb-6"
          >
            <svg className="w-5 h-5 " viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="hidden sm:flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">or sign in with email</span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm font-medium outline-none transition-all duration-200
                    ${errors.email ? "border-red-300 bg-red-50/30" : focusedField === "email" ? "border-blue-400 ring-4 ring-blue-50" : "border-slate-200 hover:border-slate-300"}
                  `}
                />
                {errors.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  </div>
                )}
              </div>
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-400" />
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 pr-12 rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm font-medium outline-none transition-all duration-200
                    ${errors.password ? "border-red-300 bg-red-50/30" : focusedField === "password" ? "border-blue-400 ring-4 ring-blue-50" : "border-slate-200 hover:border-slate-300"}
                  `}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 font-medium">{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleChange("rememberMe", e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center
                    ${formData.rememberMe
                      ? "bg-blue-500 border-blue-500"
                      : "border-slate-300 bg-white group-hover:border-slate-400"
                    }
                  `}>
                    {formData.rememberMe && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-slate-600 font-medium">Remember me for 30 days</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          © 2026 Creatik AI. All rights reserved.
        </p>
      </div>
    </div>
  );
}