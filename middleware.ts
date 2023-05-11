import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/"],
  ignoredRoutes: ["i.ytimg.com", "youtube.com"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
}
