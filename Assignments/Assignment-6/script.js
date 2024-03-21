const hotelData = {
    "New York": [
      { name: "Hotel New Yorker", description: "A charming stay in the heart of the city.", price: "$200",  imageUrl: "images/New-yorker.jpeg" },
      { name: "The Plaza", description: "Iconic luxury and opulent details.", price: "$500", imageUrl: "images/the-plaza.jpeg" },
      { name: "Empire Hotel", description: "Modern amenities with a rooftop view.", price: "$350", imageUrl: "images/empire.jpeg" }
    ],
    "Los Angeles": [
      { name: "The Beverly Hills Hotel", description: "Experience the glamour of Hollywood.", price: "$400", imageUrl: "images/bevelry-LA.jpeg" },
      { name: "Hotel California", description: "A relaxing retreat in the city of angels.", price: "$250", imageUrl: "images/hotel-cali-LA.jpeg" },
      { name: "The Hollywood Roosevelt", description: "A touch of movie magic.", price: "$300", imageUrl: "images/roosevelt-LA.jpeg" }
    ],
    "Chicago": [
      { name: "The Drake", description: "Historic elegance on the Magnificent Mile.", price: "$180", imageUrl: "images/drake-ch.jpeg" },
      { name: "Hotel Chicago", description: "Stylish accommodations in the city center.", price: "$220", imageUrl: "images/chicago-ch.jpeg" },
      { name: "The Peninsula Chicago", description: "Award-winning service and comfort.", price: "$450", imageUrl: "images/peninsula-ch.jpeg"}
    ],
    "Houston": [
      { name: "Hotel Zaza Houston", description: "Unique decor in the museum district.", price: "$230", imageUrl: "images/zaza-houston.jpeg" },
      { name: "The Post Oak Hotel", description: "Luxury oasis with a fine dining collection.", price: "$420", imageUrl: "images/post-oak-houston.jpeg" },
      { name: "Magnolia Hotel Houston", description: "Historic building turned boutique hotel.", price: "$210", imageUrl: "images/magnolia-houston.jpeg" }
    ],
    "Phoenix": [
      { name: "Arizona Biltmore", description: "A landmark hotel with stunning architecture.", price: "$340", imageUrl: "images/biltmore-az.jpeg" },
      { name: "Royal Palms Resort and Spa", description: "Mediterranean style villa with scenic views.", price: "$390", imageUrl: "images/royal-palms-az.jpeg" },
      { name: "The Camby", description: "A vibrant and playful atmosphere.", price: "$200", imageUrl: "images/camby-az.jpeg" }
    ],
    "Philadelphia": [
      { name: "The Rittenhouse Hotel", description: "Overlooking the historic Rittenhouse Square.", price: "$310", imageUrl: "images/rittenhouse-philly.jpeg" },
      { name: "The Logan Philadelphia", description: "Contemporary luxury in the heart of downtown.", price: "$260", imageUrl: "images/logan-philadephia.jpeg" },
      { name: "Loews Philadelphia Hotel", description: "Comfort and convenience in a landmark building.", price: "$200", imageUrl: "images/Loews-phil.jpeg" }
    ],
    "San Antonio": [
      { name: "Hotel Emma", description: "A culinary-centric, boutique experience.", price: "$300", imageUrl: "images/emma-SA.jpeg" },
      { name: "The St. Anthony, a Luxury Collection Hotel", description: "Refined and sophisticated lodging.", price: "$330", imageUrl: "images/anthony-SA.jpeg" },
      { name: "Mokara Hotel & Spa", description: "A relaxing retreat with rooftop pool.", price: "$280", imageUrl: "images/mokara-SA.jpg" }
    ]
  };
  

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'BookingPage.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.city-banner li').forEach(function(item) {
      item.addEventListener('click', function() {
        const city = this.getAttribute('data-city');
        document.getElementById('destination').value = city;
      });
    });
  
    document.getElementById('searchForm').addEventListener('submit', function(e) {
      e.preventDefault(); 
  
      const destination = document.getElementById('destination').value;
      window.location.href = `bookingPage.html?city=${encodeURIComponent(destination)}`;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const container = document.querySelector('.results-container');
    container.innerHTML = ''; 
  
    if (hotelData[city]) {
      hotelData[city].forEach((hotel, index) => {
        container.innerHTML += `
          <div class="result-card" id="hotel-${index}">
            <div class="hotel-image">
              <img src="${hotel.imageUrl}" alt="Image of ${hotel.name}" />
            </div>
            <div class="hotel-info">
              <h2>${hotel.name}</h2>
              <p>${hotel.description}</p>
            </div>
            <div class="hotel-price">
              <p class="text-dark">Price per night:</p>
              <p class="text-secondary">${hotel.price}</p>
            </div>
            <div class="booking-section">
              <label for="nights-${index}">Nights:</label>
              <input type="number" id="nights-${index}" name="nights" value="0" min="0" class="nights-input">
              <button class="book-room-btn" data-hotel-index="${index}">Book Room</button>
              <p>Total: <span id="total-${index}">0</span></p>
            </div>
          </div>
        `;
      });
  
      document.querySelectorAll('.book-room-btn').forEach(button => {
        button.addEventListener('click', event => {
          const index = event.target.getAttribute('data-hotel-index');
          const nights = document.getElementById(`nights-${index}`).value;
          const pricePerNight = hotelData[city][index].price.replace('$', '');
          const totalPrice = parseInt(pricePerNight, 10) * parseInt(nights, 10);
          document.getElementById(`total-${index}`).textContent = `$${totalPrice}`;
          alert(`Congratulations! We have received the booking request of your room for ${nights} nights. Please pay ${totalPrice} amount before the checkin date to confirm your booking.`);  
        });
       
      });
    } else {
      container.innerHTML = '<p>No hotels found for this city.</p>';
    }
  });
  
