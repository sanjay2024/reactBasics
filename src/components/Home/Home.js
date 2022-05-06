import Cards from "../Card/Cards";
const Home = () => {
  return (
    <>
            <h1>
                    Welcome to home page
            </h1>
          
              {/* <Cards Number='1'></Cards>
              <Cards Number='2'></Cards>
              <Cards Number='3'></Cards> */}
              <Cards color="red" number='1'/>
              <Cards number='2'/>
              <Cards number='3'/>
              <Cards number='4'/>

    </>
  )
}

export default Home;