import Link from "next/link";

const cityList = [
  {
    country: "USA",
    city: "NewYork",
  },
  {
    country: "Spain",
    city: "Madrid",
  },
  {
    country: "England",
    city: "London",
  },
];

const Index = () => (
  <>
    <div>
      <Link href="/">
        <a>Main</a>
      </Link>
    </div>
    <hr />
    <ul>
      {
        cityList.map((item, index) => {
          return (
            <li key={index}>
              <Link as={`router/${item.country}/${item.city}`} href="router/[country]/[city]">
                <a>
                  {item.country}-{item.city}
                </a>
              </Link>
            </li>
          )
        })
      }

    </ul>
  </>
);

export default Index;