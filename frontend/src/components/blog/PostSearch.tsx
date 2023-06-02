import { useEffect } from 'react'

export default function PostSearch() {
  useEffect(() => {
    if ('URLSearchParams' in window) {
      const urlParams = new URLSearchParams(window.location.search);
      const searchString = urlParams.get('q');

      console.log(searchString)
    }
  }, [])
  return (
    <div className="mt-24 mx-16">PostSearch</div>
  )
}
