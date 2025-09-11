const Weather = ({temperature}) => {
  if (temperature < 15) {
    return <div><h1 className="text-red-400">It is cold outside</h1></div>;
  } else if (temperature >= 15 && temperature < 25) {
    return <div><h1 className="text-yellow-400">It is not cold</h1></div>;
  } else {
    return <div><h1 className="text-orange-400">It is hot</h1></div>;
  }

}

export default Weather