import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="container mx-auto h-screen max-w-full">
      <body>{children}</body>
    </html>
  )
}
