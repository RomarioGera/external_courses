var obj = {
  Name: 'name',
  Age: 'age',
  Location: 'location'
};

function getProps(obj) {
  for (var prop in obj) {
    console.log(prop);
  }
} 

getProps(obj)
