/*  Data.getPlacesNames->Belt.Array.map(place => <li key=place> <Place name=place /> </li>)->React.array*/
[@react.component]
let make = () => {
  let (searchTerm, setSearchTerm) = React.useState(() => "");

  <div>
    <Form onChange=setSearchTerm searchTerm />
    <ul>
      {Data.places
       ->Data.searchPlaces(searchTerm)
       ->Belt.List.map(place =>
           <li key={place.id}> <Place name={place.name} /> </li>
         )
       ->Belt.List.toArray
       ->React.array}
    </ul>
  </div>;
};