
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TiptapEditor from '@/components/tiptap-editor';
import ImageUpload from '@/components/blog-img-upload';
import TagInput from '@/components/blog-tag-input';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';


const PAGES = ['Home', 'calling-agent', 'content-creation-agent', 'seo-content-agent',
   'follow-up-agent',
   'data-mining-agent', 'campaign-automation',"lead-capture-agent" , 
   "lead-qualification-agent","property-maching-agent"
  ,"social-media-agent","ai-training","machine-learning-training"
  ,"fullstack-development-training",
"digital-marketing-training","social-media-training", "google-ads-training",
"education","real-estate","healthcare","technology","tour-&-tourism","customer-goods-retail",
"business-enhance","video-creation","content-creation","business-automation",
"lead-automation","workflow-automation",
"ai-chatbot","ai-personal-assistent", "ai-tools-course","about-us","contact-us",
"why-choose-us","help-center","community","blog"];

export default function NewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImg: '',
    pageName: 'Home',
    tags: '',
    isPublished: false,
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleSubmit = async (publish: boolean) => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Title and content are required');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, isPublished: publish }),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/blogs');
        router.refresh();
      } else {
        alert(data.error || 'Failed to create blog');
      }
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MasterProtectedRoute>
    <div className="min-h-screen bg-[var(--color-section-alt)]">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)] py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/blogs"
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <div>
            <h1 className="text-[var(--section-title-size)] font-bold text-[var(--color-text-primary)]">
              Create New Blog
            </h1>
            <p className="text-[var(--color-text-muted)] mt-1">
              Write and publish a new blog post
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-card)] space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog title..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-glow)] transition-all text-lg font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Slug <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-faint)] text-sm">/blog/</span>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-glow)] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Excerpt
                </label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short description of your blog post..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-glow)] transition-all resize-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <TiptapEditor
                  content={form.content}
                  onChange={(html) => setForm({ ...form, content: html })}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Card */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Publish</h3>
              
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-[var(--color-section-alt)] border border-[var(--color-border)]">
                <div className={`w-10 h-6 rounded-full p-1 transition-colors cursor-pointer ${form.isPublished ? 'bg-[var(--color-emerald)]' : 'bg-[var(--color-text-faint)]'}`}
                  onClick={() => setForm({ ...form, isPublished: !form.isPublished })}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${form.isPublished ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                  {form.isPublished ? 'Published' : 'Draft'}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleSubmit(false)}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-section-alt)] transition-all disabled:opacity-50"
                >
                  Save Draft
                </button>
                <button
                  onClick={() => handleSubmit(true)}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-all shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] disabled:opacity-50"
                >
                  {loading ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Featured Image</h3>
              <ImageUpload
                value={form.featuredImg}
                onChange={(url) => setForm({ ...form, featuredImg: url })}
              />
            </div>

            {/* Page & Tags */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-card)] space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Page Name
                </label>
                <select
                  value={form.pageName}
                  onChange={(e) => setForm({ ...form, pageName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-glow)] transition-all text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                >
                  {PAGES.map((page) => (
                    <option key={page} value={page}>{page}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                  Tags
                </label>
                <TagInput
                  value={form.tags}
                  onChange={(tags) => setForm({ ...form, tags })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MasterProtectedRoute>
  );
}