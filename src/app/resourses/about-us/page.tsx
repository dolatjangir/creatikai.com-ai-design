import React from 'react'
import AboutPage from './clientabout'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;

export default async function page() {
   const blogs = await getPageBlogs('about-us');

  return (
    <>
  <AboutPage/>
  <RelatedBlogs blogs={blogs} />
  </>
  )
}





























// import React from 'react'

// function page() {

//      const courses = [
//         {
//           tag: "Featured",
//           tagColor: "var(--color-tag-bestseller)",
//           title: "AI Website Development",
//           level: "Custom Solutions",
//           rating: 4.9,
//           reviews: "2.3k",
//           weeks: "2-4 Weeks",
//           price: "Custom",
//           oldPrice: "",
//           icon: <Brain className="w-12 h-12 text-[var(--color-course-icon-1)]"/>,
//           bgGradient: "var(--gradient-course-1)",
//         },
//         {
//           tag: "Popular",
//           tagColor: "var(--color-tag-popular)",
//           title: "n8n Business Automation",
//           level: "End-to-End Setup",
//           rating: 4.7,
//           reviews: "1.8k",
//           weeks: "1-3 Weeks",
//           price: "Custom",
//           oldPrice: "",
//           icon: <Zap className="w-12 h-12 text-[var(--color-course-icon-2)]" />,
//           bgGradient: "var(--gradient-course-2)",
//         },
//         {
//           tag: "New",
//           tagColor: "var(--color-tag-new)",
//           title: "AI Agent & Chatbot Systems",
//           level: "Enterprise Ready",
//           rating: 4.9,
//           reviews: "1.2k",
//           weeks: "2-4 Weeks",
//           price: "Custom",
//           oldPrice: "",
//           icon: <MessageSquare className="w-12 h-12 text-[var(--color-course-icon-3)]"  />,
//           bgGradient: "var(--gradient-course-3)",
//         },
//         {
//           tag: null,
//           tagColor: "",
//           title: "SEO & Digital Growth",
//           level: "Data-Driven Strategy",
//           rating: 4.6,
//           reviews: "2.1k",
//           weeks: "Ongoing",
//           price: "Custom",
//           oldPrice: "",
//           icon: <BarChart3 className="w-12 h-12 text-[var(--color-course-icon-4)]"  />,
//           bgGradient: "var(--gradient-course-4)",
//         },
//       ];
    
//       const stats = [
//         { value: "500+", label: "Projects Delivered" },
//         { value: "100+", label: "Automation Experts" },
//         { value: "50+", label: "AI Solutions Built" },
//         { value: "98%", label: "Client Satisfaction" },
//       ];
    
//   return (
//     <div>
//          {/* Popular Courses */}
//       <section
//         className="py-[var(--section-py)]"
//         style={{ backgroundColor: "var(--color-section-alt)" }}
//       >
//         <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
//             <div>
//               <span
//                 className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3"
//                 style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
//               >
//                 Our Services
//               </span>
//               <h2
//                 className="text-[var(--section-title-size)] font-extrabold tracking-tight"
//                 style={{ color: "var(--color-text-primary)" }}
//               >
//                 Explore Our AI Solutions
//               </h2>
//             </div>
//             <button
//               className="text-sm font-semibold flex items-center gap-1 transition-colors"
//               style={{ color: "var(--color-primary)" }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-hover)")}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
//             >
//               View All Services <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {courses.map((course, idx) => (
//               <div
//                 key={idx}
//                 className="group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
//                 style={{
//                   backgroundColor: "var(--color-card-bg)",
//                   borderColor: "var(--color-border-light)",
//                   boxShadow: "var(--shadow-sm)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.boxShadow = "var(--shadow-xl)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.boxShadow = "var(--shadow-sm)";
//                 }}
//               >
//                 {/* Course Image */}
//                 <div className="relative h-44 flex items-center justify-center overflow-hidden">
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: course.bgGradient, opacity: 0.9 }}
//                   />
//                   <div className="relative z-10">{course.icon}</div>
//                   {course.tag && (
//                     <span
//                       className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-white"
//                       style={{ backgroundColor: course.tagColor }}
//                     >
//                       {course.tag}
//                     </span>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <h3 className="text-sm font-bold mb-1 leading-snug" style={{ color: "var(--color-text-primary)" }}>
//                     {course.title}
//                   </h3>
//                   <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>{course.level}</p>

//                   <div className="flex items-center gap-3 mb-4 text-xs" style={{ color: "var(--color-text-muted)" }}>
//                     <span className="flex items-center gap-1">
//                       <Star className="w-3.5 h-3.5" style={{ fill: "var(--color-star)", color: "var(--color-star)" }} />
//                       <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>{course.rating}</span>
//                       <span>({course.reviews})</span>
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="w-3.5 h-3.5" />
//                       {course.weeks}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <span className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>{course.price}</span>
//                     <span className="text-sm line-through" style={{ color: "var(--color-text-faint)" }}>{course.oldPrice}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certification Section */}
//       <section className="py-[var(--section-py)]">
//         <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Certificate Mockup */}
//             <div className="relative flex justify-center lg:justify-start">
//               <div
//                 className="relative w-full max-w-sm rounded-xl border p-6 lg:p-8 overflow-hidden"
//                 style={{
//                   backgroundColor: "var(--color-card-bg)",
//                   borderColor: "var(--color-border)",
//                   boxShadow: "var(--shadow-xl)",
//                 }}
//               >
//                 {/* Decorative border */}
//                 <div
//                   className="absolute inset-3 border-2 rounded-lg pointer-events-none"
//                   style={{ borderColor: "var(--color-border-light)" }}
//                 />

//                 <div className="relative text-center">
//                   <div className="flex items-center justify-center gap-2 mb-4">
//                     <div
//                       className="w-6 h-6 rounded-full flex items-center justify-center"
//                       style={{ backgroundColor: "var(--color-primary)" }}
//                     >
//                       <span className="text-white font-bold text-xs">C</span>
//                     </div>
//                     <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>CreatiKai</span>
//                   </div>

//                   <p
//                     className="text-[10px] font-bold tracking-widest uppercase mb-2"
//                     style={{ color: "var(--color-text-faint)" }}
//                   >
//                     Partnership Certificate
//                   </p>

//                   <div className="my-4">
//                     <p className="text-[10px] mb-1" style={{ color: "var(--color-text-faint)" }}>This certifies that</p>
//                     <p className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>Your Company</p>
//                     <p className="text-[10px] mt-1" style={{ color: "var(--color-text-faint)" }}>has partnered with</p>
//                   </div>

//                   <p className="text-sm font-bold mb-6" style={{ color: "var(--color-primary)" }}>
//                     AI Automation Excellence
//                   </p>

//                   <div className="flex items-center justify-between px-4">
//                     <div className="text-center">
//                       <Award className="w-10 h-10 mx-auto" style={{ color: "var(--color-primary)" }} />
//                       <p className="text-[8px] mt-1" style={{ color: "var(--color-text-faint)" }}>Verified Partner</p>
//                     </div>
//                     <div
//                       className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
//                       style={{
//                         backgroundColor: "var(--color-gold-bg)",
//                         borderColor: "var(--color-gold-border)",
//                       }}
//                     >
//                       <Star className="w-6 h-6" style={{ fill: "var(--color-gold)", color: "var(--color-gold)" }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div>
//               <span
//                 className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4"
//                 style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
//               >
//                 Partnership Promise
//               </span>
//               <h2
//                 className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
//                 style={{ color: "var(--color-text-primary)" }}
//               >
//                 Work With Humble Professionals Who Deliver Results
//               </h2>

//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Flexible timelines that respect your schedule",
//                   "Humble experts who listen before they build",
//                   "AI-first approach that eliminates manual work",
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
//                     <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all text-sm mb-10"
//                 style={{
//                   backgroundColor: "var(--color-primary)",
//                   boxShadow: "var(--shadow-btn-primary)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
//                   e.currentTarget.style.boxShadow = "var(--shadow-btn-primary-hover)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = "var(--color-primary)";
//                   e.currentTarget.style.boxShadow = "var(--shadow-btn-primary)";
//                 }}
//               >
//                 Start Your Project
//                 <ArrowRight className="w-4 h-4" />
//               </button>

//               <div className="grid grid-cols-2 gap-6">
//                 {stats.map((stat, idx) => (
//                   <div key={idx}>
//                     <p
//                       className="text-2xl lg:text-3xl font-extrabold"
//                       style={{ color: "var(--color-primary)" }}
//                     >
//                       {stat.value}
//                     </p>
//                     <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default page
