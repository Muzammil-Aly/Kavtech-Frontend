// // // "use client";
// // // import React, { useState } from "react";
// // // import { useRouter } from "next/navigation"; // import router
// // // import LoadingOverlay from "./utils/LoadingOverlay";
// // // import { useGenerateHeadingMutation } from "../../app/store/redux/";

// // // export interface Option {
// // //   label: string;
// // //   highlight?: boolean;
// // //   route?: string; // <-- add route here
// // // }

// // // interface PromptCardProps {
// // //   placeholder?: string;
// // //   options?: Option[];
// // //   onSelect?: (data: { text: string; option: Option }) => void;
// // // }

// // // const PromptCard: React.FC<PromptCardProps> = ({
// // //   placeholder = "I want to optimize my distribution journey...",
// // //   options = [
// // //     { label: "Sales & Distribution", route: "/sales" },
// // //     { label: "Medicare solution", route: "/medicare" },
// // //     { label: "Match me to a MVP", highlight: true, route: "/mvp" },
// // //   ],
// // //   onSelect,
// // // }) => {
// // //   const [text, setText] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const router = useRouter();

// // //   // const handleSelect = (option: Option) => {
// // //   //   onSelect?.({ text, option });
// // //   //   if (option.route) {
// // //   //     router.push(option.route); // navigate to route
// // //   //   }

// // //   const handleSelect = async (option: Option) => {
// // //     onSelect?.({ text, option });
// // //     if (option.route) {
// // //       setLoading(true);
// // //       // optional delay for loader visibility
// // //       await new Promise((resolve) => setTimeout(resolve, 500));
// // //       router.push(option.route);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between">
// // //       {loading && <LoadingOverlay />}

// // //       <textarea
// // //         className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
// // //         placeholder={placeholder}
// // //         rows={3}
// // //         value={text}
// // //         onChange={(e) => setText(e.target.value)}
// // //       ></textarea>

// // //       <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
// // //         {options.map((option, idx) => (
// // //           <button
// // //             key={idx}
// // //             onClick={() => handleSelect(option)}
// // //             className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base ${
// // //               option.highlight ? "text-white" : "text-[#707070]"
// // //             }`}
// // //             style={
// // //               option.highlight
// // //                 ? {
// // //                     background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
// // //                                  linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
// // //                                  radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
// // //                     border: "1px solid #707070",
// // //                     marginLeft: "100px",
// // //                   }
// // //                 : {
// // //                     background: "#000000",
// // //                     border: "1px solid #707070",
// // //                   }
// // //             }
// // //           >
// // //             {option.label}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PromptCard;
// // // "use client";
// // // import React, { useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import LoadingOverlay from "./utils/LoadingOverlay";
// // // import { setPromptData } from "@/app/store/redux/promptSlice"; // ✅ adjust path if needed
// // // import { useDispatch } from "react-redux";

// // // export interface Option {
// // //   label: string;
// // //   highlight?: boolean;
// // //   route?: string;
// // // }

// // // interface PromptCardProps {
// // //   placeholder?: string;
// // //   options?: Option[];
// // //   onSelect?: (data: { text: string; option: Option }) => void;
// // // }

// // // const PromptCard: React.FC<PromptCardProps> = ({
// // //   placeholder = "I want to optimize my distribution journey...",
// // //   options = [
// // //     { label: "Sales & Distribution", route: "/sales" },
// // //     { label: "Medicare solution", route: "/medicare" },
// // //     { label: "Match me to a MVP", highlight: true, route: "/mvp" },
// // //   ],
// // //   onSelect,
// // // }) => {
// // //   const [text, setText] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [result, setResult] = useState("");
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();

// // //   const handleSelect = async (option: Option) => {
// // //     if (!text.trim()) return;
// // //     setLoading(true);

// // //     try {
// // //       // 👉 Send API request
// // //       const response = await fetch("/api/groq", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ prompt: text }),
// // //       });

// // //       const data = await response.json();
// // //       const generatedText = data.generatedText || "No response";

// // //       // ✅ Save in local state
// // //       setResult(generatedText);

// // //       // ✅ Dispatch to Redux for global access
// // //       dispatch(setPromptData({ promptText: text, result: generatedText }));

// // //       // Optional callback
// // //       onSelect?.({ text: generatedText, option });

// // //       // ✅ Navigate if route exists

// // //       if (option.route) {
// // //         router.push(option.route);
// // //       }
// // //     } catch (error) {
// // //       console.error("API error:", error);
// // //       setResult("Error fetching response");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between relative">
// // //       {loading && <LoadingOverlay />}

// // //       <textarea
// // //         className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
// // //         placeholder={placeholder}
// // //         rows={3}
// // //         value={text}
// // //         onChange={(e) => setText(e.target.value)}
// // //       ></textarea>

// // //       <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
// // //         {options.map((option, idx) => (
// // //           <button
// // //             key={idx}
// // //             onClick={() => handleSelect(option)}
// // //             disabled={!text.trim() || loading}
// // //             className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base transition-all ${
// // //               option.highlight
// // //                 ? "text-white hover:bg-white/10"
// // //                 : "text-[#707070] hover:text-white"
// // //             }`}
// // //             style={
// // //               option.highlight
// // //                 ? {
// // //                     background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
// // //                                  linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
// // //                                  radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
// // //                     border: "1px solid #707070",
// // //                     marginLeft: "100px",
// // //                   }
// // //                 : {
// // //                     background: "#000000",
// // //                     border: "1px solid #707070",
// // //                   }
// // //             }
// // //           >
// // //             {option.label}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {result && <p className="text-sm text-gray-300 mt-3">{result}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default PromptCard;
// // "use client";
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import LoadingOverlay from "./utils/LoadingOverlay";
// // import { setPromptData } from "@/app/store/redux/promptSlice";
// // import { useDispatch } from "react-redux";
// // import {
// //   useGeneratePromptMutation,
// //   useGenerateParagraphMutation,
// // } from "@/app/store/redux/api/groqApi";

// // export interface Option {
// //   label: string;
// //   highlight?: boolean;
// //   route?: string;
// // }

// // interface PromptCardProps {
// //   placeholder?: string;
// //   options?: Option[];
// //   onSelect?: (data: { text: string; option: Option }) => void;
// // }

// // const PromptCard: React.FC<PromptCardProps> = ({
// //   placeholder = "I want to optimize my distribution journey...",
// //   options = [
// //     { label: "Sales & Distribution", route: "/sales" },
// //     { label: "Medicare solution", route: "/medicare" },
// //     { label: "Match me to a MVP", highlight: true, route: "/mvp" },
// //   ],
// //   onSelect,
// // }) => {
// //   const [text, setText] = useState("");
// //   const [result, setResult] = useState("");
// //   const [navigating, setNavigating] = useState(false); // 👈 new state
// //   const router = useRouter();
// //   const dispatch = useDispatch();
// //   const [heading, setHeading] = useState("");
// //   const [paragraph, setParagraph] = useState("");
// //   const [generatePrompt, { isLoading }] = useGeneratePromptMutation();
// //   const [generateParagraph] = useGenerateParagraphMutation();
// //   // const handleSelect = async (option: Option) => {
// //   //   if (!text.trim()) return;
// //   //   setNavigating(true); // 👈 hide immediately

// //   //   try {
// //   //     const data = await generatePrompt({ prompt: text }).unwrap();
// //   //     const generatedText = data.generatedText || "No response";

// //   //     setResult(generatedText);
// //   //     dispatch(setPromptData({ promptText: text, result: generatedText }));
// //   //     onSelect?.({ text: generatedText, option });

// //   //     // Navigate
// //   //     if (option.route) {
// //   //       router.push(option.route);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("API error:", error);
// //   //     setResult("Error fetching response");
// //   //     setNavigating(false); // rollback if failed
// //   //   }
// //   // };

// //   // const handleSelect = async (option: Option) => {
// //   //   if (!text.trim()) return;
// //   //   setNavigating(true);

// //   //   const finalPrompt = `Make a Essay heading for ${text} by using maximum 10 words`;

// //   //   try {
// //   //     const data = await generatePrompt({ prompt: finalPrompt }).unwrap();

// //   //     let generatedText = data.generatedText || "No response";

// //   //     // ✅ Sanitize text: remove extra quotes, newlines, escape characters
// //   //     generatedText = generatedText
// //   //       .replace(/^"+|"+$/g, "") // remove surrounding quotes
// //   //       .replace(/\n/g, " ") // remove line breaks
// //   //       .trim(); // remove extra spaces

// //   //     setResult(generatedText);
// //   //     dispatch(setPromptData({ promptText: text, result: generatedText }));
// //   //     onSelect?.({ text: generatedText, option });

// //   //     if (option.route) {
// //   //       router.push(option.route);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("API error:", error);
// //   //     setResult("Error fetching response");
// //   //     setNavigating(false);
// //   //   }
// //   // };

// //   const handleSelect = async (option: Option) => {
// //     if (!text.trim()) return;
// //     setNavigating(true);

// //     const headingPrompt = `Make an essay heading for "${text}" using maximum 10 words`;
// //     const paragraphPrompt = `Write a short paragraph for "${text}" using simple language`;

// //     try {
// //       // Call generatePrompt for heading
// //       const promptData = await generatePrompt({
// //         prompt: headingPrompt,
// //       }).unwrap();

// //       // Call generateParagraph for paragraph
// //       const paragraphData = await generateParagraph({
// //         text: paragraphPrompt,
// //       }).unwrap();

// //       // Sanitize responses
// //       const generatedHeading = (promptData.generatedText || "No response")
// //         .replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim();

// //       const generatedParagraph = (
// //         paragraphData.generatedHeading || "No response"
// //       )
// //         .replace(/^"+|"+$/g, "")
// //         .replace(/\n/g, " ")
// //         .trim();

// //       // Store separately in state
// //       setHeading(generatedHeading);
// //       setParagraph(generatedParagraph);

// //       // Store separately in Redux
// //       dispatch(
// //         setPromptData({
// //           promptText: text,
// //           result: "",
// //           heading: generatedHeading,
// //           paragraph: generatedParagraph,
// //         })
// //       );

// //       // Callback if needed
// //       onSelect?.({ text: generatedHeading, option });

// //       // Navigate if route exists
// //       if (option.route) {
// //         router.push(option.route);
// //       }
// //     } catch (error) {
// //       console.error("API error:", error);
// //       setHeading("");
// //       setParagraph("");
// //       setResult("Error fetching response");
// //       setNavigating(false);
// //     }
// //   };

// //   // 👇 If navigating, show only loader (no flash)
// //   if (navigating) {
// //     return <LoadingOverlay />;
// //   }

// //   return (
// //     <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between relative">
// //       {(isLoading || navigating) && <LoadingOverlay />}

// //       <textarea
// //         className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
// //         placeholder={placeholder}
// //         rows={3}
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //       />

// //       <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
// //         {options.map((option, idx) => (
// //           <button
// //             key={idx}
// //             onClick={() => handleSelect(option)}
// //             disabled={!text.trim() || isLoading || navigating}
// //             className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base transition-all ${
// //               option.highlight
// //                 ? "text-white hover:bg-white/10"
// //                 : "text-[#707070] hover:text-white"
// //             }`}
// //             style={
// //               option.highlight
// //                 ? {
// //                     background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
// //                                  linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
// //                                  radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
// //                     border: "1px solid #707070",
// //                     marginLeft: "100px",
// //                   }
// //                 : { background: "#000000", border: "1px solid #707070" }
// //             }
// //           >
// //             {option.label}
// //           </button>
// //         ))}
// //       </div>

// //       {result && <p className="text-sm text-gray-300 mt-3">{result}</p>}
// //     </div>
// //   );
// // };

// // export default PromptCard;
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import LoadingOverlay from "./utils/LoadingOverlay";
// import { setPromptData } from "@/app/store/redux/promptSlice";
// import { useDispatch } from "react-redux";
// import {
//   useGenerateHeadingMutation,
//   useGenerateParagraphMutation,
//   useGenerateSubHeadingMutation,
// } from "@/app/store/redux/api/groqApi";

// export interface Option {
//   label: string;
//   highlight?: boolean;
//   route?: string;
// }

// interface PromptCardProps {
//   placeholder?: string;
//   options?: Option[];
//   onSelect?: (data: {
//     heading: string;
//     subHeading: string;
//     paragraph: string;
//     option: Option;
//   }) => void;
// }

// const PromptCard: React.FC<PromptCardProps> = ({
//   placeholder = "I want to optimize my distribution journey...",
//   options = [
//     { label: "Sales & Distribution", route: "/sales" },
//     { label: "Medicare solution", route: "/medicare" },
//     { label: "Match me to a MVP", highlight: true, route: "/mvp" },
//   ],
//   onSelect,
// }) => {
//   const [text, setText] = useState("");
//   const [heading, setHeading] = useState("");
//   const [paragraph, setParagraph] = useState("");
//   const [subHeading, setSubHeading] = useState("");

//   const [navigating, setNavigating] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // const [generatePrompt, { isLoading }] = useGenerateHeadingMutation();
//   // const [generateParagraph] = useGenerateParagraphMutation();

//   const [generateHeading, { isLoading }] = useGenerateHeadingMutation();
//   const [generateParagraph] = useGenerateParagraphMutation();
//   const [generateSubHeading] = useGenerateSubHeadingMutation();
//   const handleSelect = async (option: Option) => {
//     if (!text.trim()) return;
//     setNavigating(true);

//     try {
//       // 1️⃣ Heading
//       const headingData = await generateHeading({
//         prompt: `Make an essay heading for "${text}" using max 10 words`,
//       }).unwrap();
//       const generatedHeading = (headingData.generatedText || "No response")
//         .replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim();

//       // 2️⃣ Paragraph
//       const paragraphData = await generateParagraph({
//         prompt: `Write a main idea for "${text}" using max 30 words`,
//       }).unwrap();
//       const generatedParagraph = (paragraphData.generatedText || "No response")
//         .replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim();

//       const subHeadingData = await generateSubHeading({
//         prompt: `Make an essay heading for "${text}" using max 10 words`,
//       }).unwrap();
//       const generatedSubHeading = (
//         subHeadingData.generatedText || "No response"
//       )
//         .replace(/^"+|"+$/g, "")
//         .replace(/\n/g, " ")
//         .trim();

//       // 3️⃣ Update state & Redux
//       setHeading(generatedHeading);
//       setParagraph(generatedParagraph);
//       setSubHeading(generatedSubHeading);

//       dispatch(
//         setPromptData({
//           promptText: text,
//           result: "",
//           heading: generatedHeading,
//           paragraph: generatedParagraph,
//           subHeading: generatedSubHeading,
//         })
//       );

//       onSelect?.({
//         heading: generatedHeading,
//         paragraph: generatedParagraph,
//         subHeading: generatedSubHeading,
//         option,
//       });

//       // 4️⃣ Navigate
//       if (option.route) router.push(option.route);
//     } catch (error) {
//       console.error("API error:", error);
//       setHeading("");
//       setParagraph("");
//       setSubHeading("");
//     } finally {
//       setNavigating(false);
//     }
//   };

//   if (navigating) return <LoadingOverlay />;

//   // return (
//   //   <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between relative">
//   //     {(isLoading || navigating) && <LoadingOverlay />}

//   //     <textarea
//   //       className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
//   //       placeholder={placeholder}
//   //       rows={3}
//   //       value={text}
//   //       onChange={(e) => setText(e.target.value)}
//   //     />

//   //     <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
//   //       {options.map((option, idx) => (
//   //         <button
//   //           key={idx}
//   //           onClick={() => handleSelect(option)}
//   //           disabled={!text.trim() || isLoading || navigating}
//   //           className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base transition-all ${
//   //             option.highlight
//   //               ? "text-white hover:bg-white/10"
//   //               : "text-[#707070] hover:text-white"
//   //           }`}
//   //           style={
//   //             option.highlight
//   //               ? {
//   //                   background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
//   //                                linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
//   //                                radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
//   //                   border: "1px solid #707070",
//   //                   marginLeft: "100px",
//   //                 }
//   //               : { background: "#000000", border: "1px solid #707070" }
//   //           }
//   //         >
//   //           {option.label}
//   //         </button>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <>
//       {isLoading || navigating ? (
//         <LoadingOverlay />
//       ) : (
//         <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between relative">
//           <textarea
//             className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
//             placeholder={placeholder}
//             rows={3}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />

//           <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
//             {options.map((option, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleSelect(option)}
//                 disabled={!text.trim() || isLoading || navigating}
//                 className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base transition-all ${
//                   option.highlight
//                     ? "text-white hover:bg-white/10"
//                     : "text-[#707070] hover:text-white"
//                 }`}
//                 style={
//                   option.highlight
//                     ? {
//                         background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
//                                  linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
//                                  radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
//                         border: "1px solid #707070",
//                         marginLeft: "100px",
//                       }
//                     : { background: "#000000", border: "1px solid #707070" }
//                 }
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PromptCard;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./utils/LoadingOverlay";
import { setPromptData } from "@/app/store/redux/promptSlice";
import { useDispatch } from "react-redux";
import {
  useGenerateHeadingMutation,
  useGenerateParagraphMutation,
  useGenerateSubHeadingMutation,
  useGenerateSubParagraphMutation,
} from "@/app/store/redux/api/groqApi";

export interface Option {
  label: string;
  highlight?: boolean;
  route?: string;
}

interface PromptCardProps {
  placeholder?: string;
  options?: Option[];
  onSelect?: (data: {
    heading: string;
    subHeading: string;
    paragraph: string;
    option: Option;
  }) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({
  placeholder = "I want to optimize my distribution journey...",
  options = [
    { label: "Sales & Distribution", route: "/sales" },
    { label: "Medicare solution", route: "/medicare" },
    { label: "Match me to a MVP", highlight: true, route: "/mvp" },
  ],
  onSelect,
}) => {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [submitted, setSubmitted] = useState(false); // 👈 new state
  const [navigating, setNavigating] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const [generateHeading, { isLoading }] = useGenerateHeadingMutation();
  const [generateParagraph] = useGenerateParagraphMutation();
  const [generateSubHeading] = useGenerateSubHeadingMutation();
  const [generateSubParagraph] = useGenerateSubHeadingMutation();

  const handleSelect = async (option: Option) => {
    if (!text.trim()) return;
    setSubmitted(true); // 👈 hide card immediately
    setNavigating(true);

    try {
      // Generate heading
      const headingData = await generateHeading({
        // prompt: `Make an essay heading for "${text}" using max 9 words`,
        prompt: `Make an essay heading for "${text}" using a maximum of 65 characters. The heading should be concise, meaningful, and natural.`,
      }).unwrap();
      const generatedHeading = (headingData.generatedText || "No response")
        .replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim();

      const paragraphData = await generateParagraph({
        prompt: `Write a main idea for "${text}" using max 30 words`,
      }).unwrap();
      const generatedParagraph = (paragraphData.generatedText || "No response")
        .replace(/^"+|"+$/g, "") // remove surrounding quotes
        .replace(/\n/g, " ") // replace line breaks with space
        .trim() // remove extra spaces
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, ""); // remove all other special symbols

      // Generate sub-heading
      const subHeadingData = await generateSubHeading({
        prompt: `Make an essay sub-heading for "${text}" using a maximum of 45 characters. The heading should be concise, meaningful, and natural.`,

        // prompt: `Make a sub-heading for "${text}" using max 8 words`,
      }).unwrap();
      const generatedSubHeading = (
        subHeadingData.generatedText || "No response"
      )
        .replace(/^"+|"+$/g, "")
        .replace(/\n/g, " ")
        .trim() // remove extra spaces
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, "");

      //subParagraph

      const subParagraphData = await generateSubParagraph({
        prompt: `Write a main idea for "${text}" using max 30 words`,
      }).unwrap();
      const generatedSubParagraph = (
        subParagraphData.generatedText || "No response"
      )
        .replace(/^"+|"+$/g, "") // remove surrounding quotes
        .replace(/\n/g, " ") // replace line breaks with space
        .trim() // remove extra spaces
        .replace(/[^a-zA-Z0-9 .,?!'-]/g, ""); // remove all other special symbols

      // Update state & Redux
      setHeading(generatedHeading);
      setParagraph(generatedParagraph);
      setSubHeading(generatedSubHeading);

      dispatch(
        setPromptData({
          promptText: text,
          result: "",
          heading: generatedHeading,
          paragraph: generatedParagraph,
          subHeading: generatedSubHeading,
        })
      );

      onSelect?.({
        heading: generatedHeading,
        paragraph: generatedParagraph,
        subHeading: generatedSubHeading,
        option,
      });

      if (option.route) router.push(option.route);
    } catch (error) {
      console.error("API error:", error);
      setHeading("");
      setParagraph("");
      setSubHeading("");
      setSubmitted(false); // rollback in case of error
    } finally {
      setNavigating(false);
    }
  };

  // ✅ Hide card after submission
  if (submitted) return <LoadingOverlay />;

  return (
    <div className="w-full max-w-[681px] mx-auto sm:h-[207px] rounded-[24px] border border-gray-500/50 bg-[#06060666] p-4 sm:p-6 flex flex-col justify-between relative">
      {(isLoading || navigating) && <LoadingOverlay />}

      <textarea
        className="w-full bg-transparent text-white text-lg placeholder-gray-400 resize-none outline-none"
        placeholder={placeholder}
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-between lg:justify-start">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option)}
            disabled={!text.trim() || isLoading || navigating}
            className={`px-4 py-2 rounded-lg shadow-md text-sm sm:text-base transition-all ${
              option.highlight
                ? "text-white hover:bg-white/10"
                : "text-[#707070] hover:text-white"
            }`}
            style={
              option.highlight
                ? {
                    background: `linear-gradient(0deg, rgba(186, 156, 255, 0.01), rgba(186, 156, 255, 0.01)),
                               linear-gradient(180deg, rgba(243, 238, 255, 0) 0%, rgba(243, 238, 255, 0.04) 100%),
                               radial-gradient(231.94% 231.94% at 50% 100%, rgba(186, 156, 255, 0.25) 0%, rgba(186, 156, 255, 0) 25.24%)`,
                    border: "1px solid #707070",
                    marginLeft: "100px",
                  }
                : { background: "#000000", border: "1px solid #707070" }
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
