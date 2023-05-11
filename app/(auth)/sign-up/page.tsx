import { SignUp } from "@clerk/nextjs"

export default function signUpPage() {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
}
