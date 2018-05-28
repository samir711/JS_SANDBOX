const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/89.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },

    {
      name: 'Willam Johnson',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Lynn MA',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }


];

const profile = profileIterator(data);

// Call first profile

nextProfile();

//Next Event

document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display

function nextProfile() {

  const currentProfile = profile.next().value;

  if( currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML =
      ` 
    <ul class="list-group">
    <li class="list-group-item">Name       : ${currentProfile.name}</li>
    <li class="list-group-item">Age        : ${currentProfile.age}</li>
    <li class="list-group-item">Location   :  ${currentProfile.location}</li>
    <li class="list-group-item">Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </u>
    `;
  
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles    
    window.location.reload();
  }   

}



//Profile Iterator
function profileIterator(profile) {
  let nextIndex = 0;


  return {
    next: function () {
      return nextIndex < profile.length
        ? { value: profile[nextIndex++], done: false }
        : { done: true }
    }
  };

}