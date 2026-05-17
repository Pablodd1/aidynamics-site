'use client';

import { useState } from 'react';
import Link from 'next/link';
import { posts } from '@/data/blog-posts';

const CATEGORIES = ['All', 'Healthcare', 'Legal', 'Business', 'Technology'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Nav spacer */}
      <div className="h-16 md:h-20" />

      <section className="min-h-screen bg-light">
        {/* Hero */}
        <div className="gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">AIDynamics Blog</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                AI Automation Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Real Results</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Practical guides, real case studies, and honest analysis of AI automation for 
                healthcare, legal, and small business. No fluff — just what works.
              </p>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card header gradient */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="px-2.5 py-1 bg-primary/5 text-primary font-medium rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Want Custom AI Automation for Your Business?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We build custom AI systems that eliminate manual work. Free consultation — no obligation.
            </p>
            <a href="https://aidynamic.pro/#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
