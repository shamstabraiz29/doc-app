'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6FB3B8] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#388087] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed" />
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-[#C2EDCE] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
    </div>
  );
}
