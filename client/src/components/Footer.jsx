function Footer() {
  const year = new Date();
  return (
    <div className="bg-white h-24 flex items-center justify-center">Copyright Robert Bagwell &copy; {year.getFullYear()}</div>
  )
}

export default Footer