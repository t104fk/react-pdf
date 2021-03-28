export const Layout: React.FC = ({children}) => {
  return <html>
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>report</title>
    </head>
    <body>{children}</body>
  </html>
}
