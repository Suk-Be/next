import { useRouter } from 'next/router'

const CityItem = () => {
  // next.js hook
  const router = useRouter();
  const { country, city } = router.query // Destructuring our router object (taken from the current route in the browser location bar)

  return (
    <>
      <h2>
        {city} is placed in {country}
      </h2>
    </>
  )
}

export default CityItem;