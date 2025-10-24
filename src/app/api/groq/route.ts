// // import { NextResponse } from "next/server";

// // export async function POST(req: Request) {
// //   try {
// //     const { prompt } = await req.json();

// //     // Call Groq API
// //     const response = await fetch(
// //       "https://api.groq.com/openai/v1/chat/completions",
// //       {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`, // Secure your key in .env.local
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           model: "llama-3.1-8b-instant",
// //           messages: [{ role: "user", content: prompt }],
// //           max_completion_tokens: 10, // limit to ~30 words
// //         }),
// //       }
// //     );

// //     const data = await response.json();

// //     // Return text back to frontend
// //     return NextResponse.json({
// //       generatedText: data?.choices?.[0]?.message?.content ?? "No response",
// //     });
// //   } catch (error) {
// //     console.error("Groq API error:", error);
// //     return NextResponse.json(
// //       { error: "Something went wrong" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const groqApi = createApi({
//   reducerPath: "groqApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Call your local Next.js API
//   endpoints: (builder) => ({
//     generateHeading: builder.mutation<
//       { generatedText: string },
//       { prompt: string }
//     >({
//       query: (body) => ({
//         url: "groq", // still hitting your heading API
//         method: "POST",
//         body,
//       }),
//     }),
//     generateParagraph: builder.mutation<
//       { generatedText: string },
//       { prompt: string }
//     >({
//       query: (body) => ({
//         url: "paragraph", // hits the server route
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useGenerateHeadingMutation, useGenerateParagraphMutation } =
//   groqApi;

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`, // server-side key if safe
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          max_completion_tokens: 40,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      generatedText: data?.choices?.[0]?.message?.content ?? "No response",
    });
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
