import { SignIn } from "@clerk/nextjs"

export default function signInPage() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
}
