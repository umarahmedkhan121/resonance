import { SignUp } from "@clerk/nextjs"; 

export default function SignUpPage() {
  return (
    <div className="flex mUp-h-screen items-center justify-center bg-background">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}