import { useState } from "react";

const HOTEL = {
  name: "E-Phoenix Hotel",
  tagline: "Annex II — Ilorin",
  address: "13 Reservation Road, Flower Garden GRA, Ilorin, Kwara State",
  phone: { reception: "500", restaurant: "568", laundry: "570" },
  checkin: "12:00 PM",
  checkout: "12:00 PM",
  wifi: "E-Phoenix_Guest",
  wifiPass: "ephoenix2024",
  breakfast: "7:00 AM – 11:00 AM (Complimentary)",
  pool: "Open daily for in-house guests",
  gym: "Free access for in-house guests",
  parking: "Free valet parking available",
};

const DEPARTMENTS = [
  {
    id: "restaurant",
    icon: "🍽️",
    name: "Restaurant",
    subtitle: "24hrs Kitchen & Dining",
    phone: "568",
    badge: "24hrs",
    categories: [
      {
        name: "Breakfast",
        items: [
          { name: "Continental Breakfast", desc: "Bread, egg, juice, tea/coffee — complimentary", price: 0 },
          { name: "Full Nigerian Breakfast", desc: "Akara, pap, fried plantain & egg", price: 2500 },
          { name: "Omelette & Toast", desc: "3-egg omelette with buttered toast", price: 2000 },
        ],
      },
      {
        name: "Starters",
        items: [
          { name: "Pepper Soup", desc: "Catfish or goat meat, spiced broth", price: 2500 },
          { name: "Suya Platter", desc: "Grilled spiced beef skewers with onions", price: 2800 },
          { name: "Spring Rolls (6pcs)", desc: "Crispy rolls with veggie filling", price: 1800 },
          { name: "Gizdodo", desc: "Gizzard & plantain in spiced sauce", price: 2200 },
        ],
      },
      {
        name: "Main Dishes",
        items: [
          { name: "Jollof Rice & Chicken", desc: "Smoky party jollof with grilled chicken", price: 4500 },
          { name: "Egusi Soup & Eba", desc: "Melon seed soup with assorted meat", price: 4000 },
          { name: "Grilled Tilapia", desc: "Whole fish with pepper sauce & fries", price: 5500 },
          { name: "Fried Rice & Turkey", desc: "Nigerian fried rice with turkey", price: 4500 },
          { name: "Ofada Rice & Stew", desc: "Local rice with special ofada sauce", price: 3800 },
          { name: "Pounded Yam & Ofe Onugbu", desc: "Bitter leaf soup with assorted meat", price: 4000 },
        ],
      },
      {
        name: "Grills",
        items: [
          { name: "Grilled Chicken (Half)", desc: "Marinated, charcoal grilled with sides", price: 4000 },
          { name: "BBQ Catfish", desc: "Whole catfish, grilled with pepper sauce", price: 5000 },
          { name: "Asun (Peppered Goat)", desc: "Spicy smoked goat meat", price: 3500 },
        ],
      },
      {
        name: "Desserts & Snacks",
        items: [
          { name: "Puff Puff (6pcs)", desc: "Hot fried dough balls", price: 1000 },
          { name: "Chin Chin", desc: "Crunchy fried pastry snack", price: 800 },
          { name: "Ice Cream (2 scoops)", desc: "From our in-house Ice Cream Shop", price: 1500 },
          { name: "Fresh Fruit Salad", desc: "Seasonal fruits, chilled", price: 1500 },
        ],
      },
    ],
  },
  {
    id: "bar",
    icon: "🍺",
    name: "Bar & Lounge",
    subtitle: "Drinks & cocktails, 24hrs",
    phone: "500",
    badge: "24hrs",
    categories: [
      {
        name: "Beers & Lagers",
        items: [
          { name: "Star Lager", desc: "Nigerian classic, chilled 60cl", price: 800 },
          { name: "Guinness Nigeria", desc: "Bold stout, 50cl", price: 900 },
          { name: "Heineken", desc: "Premium Dutch lager, 33cl", price: 1000 },
          { name: "Trophy Lager", desc: "Light & smooth, 60cl", price: 750 },
          { name: "Hero Lager", desc: "East Nigeria favourite, 60cl", price: 750 },
          { name: "Maltina / Amstel Malt", desc: "Non-alcoholic malt drink", price: 700 },
        ],
      },
      {
        name: "Spirits",
        items: [
          { name: "Hennessy VS (50ml)", desc: "Served neat or on ice", price: 3500 },
          { name: "Johnnie Walker Red (50ml)", desc: "Scotch whisky", price: 2500 },
          { name: "Vodka — Smirnoff (50ml)", desc: "Neat or with mixer", price: 1500 },
          { name: "Campari (50ml)", desc: "Classic Italian bitter", price: 1800 },
        ],
      },
      {
        name: "Wine",
        items: [
          { name: "Red Wine (Glass)", desc: "House red, 200ml", price: 2000 },
          { name: "White Wine (Glass)", desc: "House white, 200ml", price: 2000 },
          { name: "Rosé (Glass)", desc: "Light & fruity, 200ml", price: 2200 },
        ],
      },
      {
        name: "Cocktails & Mocktails",
        items: [
          { name: "Chapman", desc: "Nigerian classic — Fanta, Sprite, grenadine", price: 1500 },
          { name: "E-Phoenix Sunset", desc: "Rum, passion fruit, ginger beer", price: 3000 },
          { name: "Mojito", desc: "Rum, lime, mint, soda", price: 2800 },
          { name: "Palm Wine Cooler", desc: "Palm wine, citrus & ice", price: 2000 },
          { name: "Virgin Pina Colada", desc: "Coconut, pineapple, cream (no alcohol)", price: 2000 },
        ],
      },
      {
        name: "Soft Drinks & Juices",
        items: [
          { name: "Coke / Fanta / Sprite", desc: "50cl chilled bottle", price: 500 },
          { name: "Water (Still)", desc: "75cl bottle", price: 400 },
          { name: "Sparkling Water", desc: "75cl bottle", price: 600 },
          { name: "Zobo (Hibiscus)", desc: "Fresh house-made zobo drink", price: 800 },
          { name: "Fresh Juice", desc: "Orange, pineapple or watermelon", price: 1200 },
        ],
      },
    ],
  },
  {
    id: "roomservice",
    icon: "🛏️",
    name: "Room Service",
    subtitle: "Food & requests to your room",
    phone: "568",
    badge: "24hrs",
    categories: [
      {
        name: "Food",
        items: [
          { name: "Continental Breakfast", desc: "Eggs, toast, juice, tea/coffee", price: 3500 },
          { name: "Noodles & Egg", desc: "Indomie with fried egg", price: 1500 },
          { name: "Club Sandwich & Chips", desc: "Toasted sandwich with side fries", price: 2800 },
          { name: "Jollof Rice & Chicken", desc: "Full plate to your room", price: 5000 },
          { name: "Grilled Catfish & Rice", desc: "Peppered fish with white rice", price: 5500 },
        ],
      },
      {
        name: "Beverages",
        items: [
          { name: "Hot Tea / Coffee", desc: "With milk and sugar", price: 800 },
          { name: "Bottled Water x2", desc: "Two 75cl still water bottles", price: 700 },
          { name: "Soft Drink", desc: "Coke, Fanta or Sprite", price: 600 },
        ],
      },
      {
        name: "Room Extras (Free)",
        items: [
          { name: "Extra Pillow", desc: "Soft or firm, your choice", price: 0 },
          { name: "Extra Blanket", desc: "Warm king-size blanket", price: 0 },
          { name: "Tray Removal", desc: "We'll collect your room service tray", price: 0 },
          { name: "Tea/Coffee Refill", desc: "Kettle supplies top-up", price: 0 },
        ],
      },
    ],
  },
  {
    id: "laundry",
    icon: "👕",
    name: "Laundry",
    subtitle: "24hrs wash, dry & iron",
    phone: "570",
    badge: "24hrs",
    categories: [
      {
        name: "Washing & Folding",
        items: [
          { name: "T-Shirt / Top", desc: "Washed and folded", price: 500 },
          { name: "Shirt (Formal)", desc: "Washed and pressed", price: 600 },
          { name: "Trousers / Jeans", desc: "Washed and folded", price: 700 },
          { name: "Dress (Ladies)", desc: "Washed, pressed and hung", price: 800 },
          { name: "Underwear / Socks", desc: "Per piece, washed and dried", price: 300 },
          { name: "Suit (Full)", desc: "Dry cleaned and pressed", price: 3500 },
          { name: "Agbada / Native Wear", desc: "Delicate wash and press", price: 2500 },
        ],
      },
      {
        name: "Ironing Only",
        items: [
          { name: "Shirt / Top", desc: "Ironed only, per piece", price: 300 },
          { name: "Trousers", desc: "Ironed with crease", price: 400 },
          { name: "Dress", desc: "Steamed and pressed", price: 500 },
        ],
      },
      {
        name: "Express Service",
        items: [
          { name: "Express Wash & Iron", desc: "Ready within 3 hours (any item)", price: 1500 },
          { name: "Overnight Service", desc: "Ready by 7AM next morning (per item)", price: 800 },
        ],
      },
    ],
  },
  {
    id: "spa",
    icon: "💆",
    name: "Spa & Wellness",
    subtitle: "Massage, salon & treatments",
    phone: "500",
    badge: "Popular",
    categories: [
      {
        name: "Massage Treatments",
        items: [
          { name: "Swedish Massage (60 min)", desc: "Full body relaxation massage", price: 8000 },
          { name: "Deep Tissue (60 min)", desc: "Firm pressure, muscle relief", price: 10000 },
          { name: "Hot Stone Massage (75 min)", desc: "Heated stones for deep relaxation", price: 12000 },
          { name: "Couples Massage (60 min)", desc: "Side-by-side for two guests", price: 18000 },
          { name: "Neck & Shoulder (30 min)", desc: "Quick targeted relief", price: 4500 },
        ],
      },
      {
        name: "Body & Beauty",
        items: [
          { name: "Full Body Scrub", desc: "Exfoliating sugar or salt scrub", price: 6000 },
          { name: "Facial Treatment", desc: "Deep cleanse and moisturise", price: 7000 },
          { name: "Manicure & Pedicure", desc: "Full nail care treatment", price: 5000 },
          { name: "Hair Styling (Salon)", desc: "Call reception for pricing", price: 0 },
        ],
      },
      {
        name: "Fitness & Recreation",
        items: [
          { name: "Gym Access", desc: "Free for in-house guests", price: 0 },
          { name: "Swimming Pool", desc: "Free for in-house guests", price: 0 },
          { name: "Fitness Classes", desc: "Ask reception for schedule", price: 0 },
        ],
      },
    ],
  },
  {
    id: "transport",
    icon: "🚗",
    name: "Transport",
    subtitle: "Airport shuttle & car hire",
    phone: "500",
    categories: [
      {
        name: "Airport Transfers",
        items: [
          { name: "Airport Shuttle (Sedan)", desc: "To/from Ilorin International Airport", price: 8000 },
          { name: "Airport Shuttle (SUV)", desc: "Up to 6 guests with luggage", price: 12000 },
        ],
      },
      {
        name: "Car Hire",
        items: [
          { name: "Half Day Hire (4hrs)", desc: "Chauffeured, within Ilorin", price: 15000 },
          { name: "Full Day Hire (8hrs)", desc: "Chauffeured, within Ilorin", price: 25000 },
          { name: "Intercity Trip", desc: "Call reception for pricing", price: 0 },
        ],
      },
      {
        name: "Nearby Attractions",
        items: [
          { name: "Palms Shopping Mall", desc: "0.8 miles — transport available", price: 0 },
          { name: "Viva Cinemas", desc: "2.4 miles — transport available", price: 0 },
          { name: "Unilorin Zoo & Botanical Garden", desc: "Nearby — ask reception", price: 0 },
          { name: "Ilorin Emir's Palace", desc: "Nearby — ask reception", price: 0 },
          { name: "Shoprite Ilorin", desc: "Nearby — transport available", price: 0 },
        ],
      },
    ],
  },
  {
    id: "concierge",
    icon: "🔔",
    name: "Concierge",
    subtitle: "Reception & guest services",
    phone: "500",
    categories: [
      {
        name: "Stay Requests",
        items: [
          { name: "Late Checkout (2PM)", desc: "Subject to availability", price: 5000 },
          { name: "Early Check-in", desc: "Before 12PM, subject to availability", price: 5000 },
          { name: "Luggage Storage", desc: "Secure storage before/after checkout", price: 0 },
          { name: "Wake-up Call", desc: "Morning call to your room", price: 0 },
          { name: "Flower Arrangement", desc: "For special occasions in room", price: 4000 },
        ],
      },
      {
        name: "Business Services",
        items: [
          { name: "Meeting Room Booking", desc: "Conference facilities available", price: 0 },
          { name: "Printing / Photocopy", desc: "Ask reception for assistance", price: 0 },
        ],
      },
      {
        name: "Information",
        items: [
          { name: "Local ATM / Bank Directions", desc: "Nearest options from hotel", price: 0 },
          { name: "Restaurant Recommendations", desc: "Nearby dining options", price: 0 },
          { name: "Prayer Times / Quiet Room", desc: "Ask reception for details", price: 0 },
          { name: "Event Ticket Assistance", desc: "Local events and shows", price: 0 },
        ],
      },
    ],
  },
];

const fmt = (p) => p === 0 ? "Free" : `₦${p.toLocaleString()}`;

export default function HotelPortal() {
  const [screen, setScreen] = useState("login");
  const [guest, setGuest] = useState({ name: "", room: "", email: "", count: "1 Guest" });
  const [activeDept, setActiveDept] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [note, setNote] = useState("");
  const [ordered, setOrdered] = useState(false);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const login = () => {
    if (!guest.name || !guest.room) return alert("Please enter your name and room number.");
    setScreen("portal");
  };

  const addToCart = (deptId, cat, item) => {
    setCart((c) => [...c, { deptId, cat, ...item }]);
    showToast(`${item.name} added ✓`);
  };

  const removeFromCart = (i) => setCart((c) => c.filter((_, idx) => idx !== i));
  const total = cart.reduce((s, i) => s + i.price, 0);

  const placeOrder = () => {
    setCart([]);
    setCartOpen(false);
    setNote("");
    setOrdered(true);
  };

  const dept = DEPARTMENTS.find((d) => d.id === activeDept);

  // ORDER SUCCESS
  if (ordered) return (
    <div style={styles.successScreen}>
      <div style={styles.successBox}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
        <h2 style={styles.successTitle}>Order Received!</h2>
        <p style={styles.successText}>
          Your request has been sent to the relevant department.<br />
          We'll attend to you shortly.<br /><br />
          <span style={{ color: "#C9A84C" }}>Expected wait: 15 – 30 minutes</span>
        </p>
        <button style={styles.btnPrimary} onClick={() => { setOrdered(false); setActiveDept(null); setScreen("portal"); }}>
          Back to Portal
        </button>
      </div>
    </div>
  );

  // DEPARTMENT PANEL
  if (screen === "dept" && dept) return (
    <div style={styles.screen}>
      <div style={styles.panelHeader}>
        <button style={styles.backBtn} onClick={() => setScreen("portal")}>← Back</button>
        <span style={styles.panelTitle}>{dept.icon} {dept.name}</span>
        <button style={styles.cartChip} onClick={() => setCartOpen(true)}>
          🛒 {cart.length}
        </button>
      </div>

      <div style={{ background: "#1A1710", padding: "12px 16px", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <p style={{ fontSize: 12, color: "#9A9285" }}>{dept.subtitle}</p>
        {dept.phone && <p style={{ fontSize: 14, color: "#B8892A", marginTop: 4, fontWeight: 800 }}>📞 Dial <span style={{ fontSize: 22, fontFamily: "Georgia,serif", fontWeight: 900, color: "#B8892A" }}>{dept.phone}</span> from your room phone</p>}
      </div>

      {dept.categories.map((cat) => (
        <div key={cat.name}>
          <div style={styles.catHeader}>{cat.name}</div>
          {cat.items.map((item) => (
            <div key={item.name} style={styles.menuItem}>
              <div style={{ flex: 1 }}>
                <div style={styles.itemName}>{item.name}</div>
                <div style={styles.itemDesc}>{item.desc}</div>
              </div>
              <div style={styles.itemRight}>
                <div style={styles.itemPrice}>{fmt(item.price)}</div>
                <button style={styles.addBtn} onClick={() => addToCart(dept.id, cat.name, item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div style={styles.deptFooter}>
        <p style={{ fontSize: 12, color: "#9A9285", textAlign: "center" }}>
          For anything not listed, call Reception: <strong style={{ color: "#C9A84C" }}>500</strong>
        </p>
      </div>

      {/* Cart Modal */}
      {cartOpen && (
        <div style={styles.cartOverlay} onClick={(e) => e.target === e.currentTarget && setCartOpen(false)}>
          <div style={styles.cartSheet}>
            <div style={styles.cartHeader}>
              <span style={styles.cartTitle}>Your Order</span>
              <button style={styles.closeBtn} onClick={() => setCartOpen(false)}>✕</button>
            </div>
            {cart.length === 0 ? (
              <div style={styles.emptyCart}>🛒<br /><br />Cart is empty</div>
            ) : (
              <>
                {cart.map((item, i) => (
                  <div key={i} style={styles.cartItem}>
                    <div>
                      <div style={{ fontSize: 14, color: "#F5F0E8" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#9A9285" }}>{item.cat}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#C9A84C", fontFamily: "Georgia, serif" }}>{fmt(item.price)}</span>
                      <button style={{ background: "none", border: "none", color: "#ff6b6b", cursor: "pointer" }} onClick={() => removeFromCart(i)}>✕</button>
                    </div>
                  </div>
                ))}
                <div style={styles.cartFooter}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: "#9A9285", textTransform: "uppercase", letterSpacing: 1 }}>Total</span>
                    <span style={{ color: "#C9A84C", fontFamily: "Georgia, serif", fontSize: 18 }}>₦{total.toLocaleString()}</span>
                  </div>
                  <textarea
                    style={styles.noteInput}
                    rows={2}
                    placeholder="Any special requests or notes..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <button style={styles.btnPrimary} onClick={placeOrder}>Place Order →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {toast && <div style={styles.toast}>{toast}</div>}
    </div>
  );

  // LOGIN
  if (screen === "login") return (
    <div style={styles.loginScreen}>
      <div style={styles.loginBox}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🦅</div>
          <h1 style={styles.hotelName}>E-PHOENIX HOTEL</h1>
          <p style={styles.hotelSub}>Annex II — Ilorin, Kwara State</p>
          <p style={{ fontSize: 11, color: "#9A9285", marginTop: 4 }}>Guest Portal</p>
        </div>

        <div style={styles.formDivider}><span style={styles.dividerText}>Welcome — Please Sign In</span></div>

        {[
          { label: "Full Name", key: "name", type: "text", placeholder: "e.g. Amina Bello" },
          { label: "Room Number", key: "room", type: "text", placeholder: "e.g. 204" },
          { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
        ].map(({ label, key, type, placeholder }) => (
          <div key={key} style={{ marginBottom: 12 }}>
            <label style={styles.formLabel}>{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              value={guest[key]}
              onChange={(e) => setGuest((g) => ({ ...g, [key]: e.target.value }))}
              style={styles.formInput}
            />
          </div>
        ))}

        <div style={{ marginBottom: 12 }}>
          <label style={styles.formLabel}>Number of Guests</label>
          <select value={guest.count} onChange={(e) => setGuest((g) => ({ ...g, count: e.target.value }))} style={styles.formInput}>
            {["1 Guest", "2 Guests", "3 Guests", "4+ Guests"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        <button style={styles.btnPrimary} onClick={login}>Access Hotel Services →</button>

        <div style={styles.wifiBox}>
          <p style={{ fontSize: 12, color: "#9A9285" }}>WiFi: <strong style={{ color: "#C9A84C" }}>{HOTEL.wifi}</strong></p>
          <p style={{ fontSize: 12, color: "#9A9285", marginTop: 4 }}>Password: <strong style={{ color: "#C9A84C" }}>{HOTEL.wifiPass}</strong></p>
        </div>
      </div>
    </div>
  );

  // MAIN PORTAL
  return (
    <div style={styles.screen}>
      {/* Topbar */}
      <div style={styles.topbar}>
        <div>
          <div style={styles.topbarTitle}>E-PHOENIX HOTEL</div>
          <div style={{ fontSize: 11, color: "#9A9285" }}>Annex II, Ilorin</div>
        </div>
        <button style={styles.cartChip} onClick={() => setCartOpen(true)}>
          🛒 Cart <span style={styles.cartBadge}>{cart.length}</span>
        </button>
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.roomBadge}>Room {guest.room}</div>
        <h2 style={styles.heroGreeting}>{greeting}, {guest.name.split(" ")[0]}.</h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Everything you need, right here.</p>
      </div>

      {/* Promos */}
      <div style={styles.promoStrip}>
        {[
          { label: "🍳 Breakfast", text: "Complimentary daily 7AM–11AM" },
          { label: "🏊 Pool & Gym", text: "Free access for all in-house guests" },
          { label: "🚗 Airport Shuttle", text: "Available on request — call 500" },
          { label: "📅 Late Checkout", text: "Extend to 2PM for ₦5,000" },
          { label: "🌐 Free WiFi", text: `Network: ${HOTEL.wifi}` },
        ].map((p) => (
          <div key={p.label} style={styles.promoCard}>
            <div style={styles.promoLabel}>{p.label}</div>
            <p style={{ fontSize: 12, color: "#EDE8DC", lineHeight: 1.4 }}>{p.text}</p>
          </div>
        ))}
      </div>

      {/* Emergency */}
      <div style={styles.emergencyBar}>
        <span style={{ fontSize: 18 }}>🚨</span>
        <p style={{ fontSize: 12, color: "#ff9999", lineHeight: 1.5 }}>
          Emergency? Dial <strong>500</strong> (Reception) or <strong>0</strong> from your room phone. Security available 24hrs.
        </p>
      </div>

      {/* Departments */}
      <div style={styles.sectionLabel}>OUR SERVICES</div>
      <div style={styles.deptGrid}>
        {DEPARTMENTS.map((d) => (
          <div key={d.id} style={styles.deptCard} onClick={() => { setActiveDept(d.id); setScreen("dept"); }}>
            {d.badge && <div style={styles.deptBadge}>{d.badge}</div>}
            <div style={{ fontSize: 30, marginBottom: 8 }}>{d.icon}</div>
            <div style={styles.deptName}>{d.name}</div>
            <div style={styles.deptSub}>{d.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Hotel Info */}
      <div style={styles.infoBox}>
        <div style={styles.infoTitle}>HOTEL INFORMATION</div>
        {[
          ["📍 Address", HOTEL.address],
          ["🕐 Check-in", HOTEL.checkin],
          ["🕛 Check-out", HOTEL.checkout],
          ["🍳 Breakfast", HOTEL.breakfast],
          ["📞 Reception", `Dial ${HOTEL.phone.reception}`],
          ["📞 Restaurant", `Dial ${HOTEL.phone.restaurant}`],
          ["📞 Laundry", `Dial ${HOTEL.phone.laundry}`],
          ["🅿️ Parking", HOTEL.parking],
        ].map(([k, v]) => (
          <div key={k} style={styles.infoRow}>
            <span style={styles.infoKey}>{k}</span>
            <span style={styles.infoVal}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "12px 16px 24px", fontSize: 11, color: "#555" }}>
        E-Phoenix Hotel Annex II · 13 Reservation Road, GRA Ilorin
      </div>

      {/* Cart Modal */}
      {cartOpen && (
        <div style={styles.cartOverlay} onClick={(e) => e.target === e.currentTarget && setCartOpen(false)}>
          <div style={styles.cartSheet}>
            <div style={styles.cartHeader}>
              <span style={styles.cartTitle}>Your Order</span>
              <button style={styles.closeBtn} onClick={() => setCartOpen(false)}>✕</button>
            </div>
            {cart.length === 0 ? (
              <div style={styles.emptyCart}>🛒<br /><br />Your cart is empty.<br />Add items from any department.</div>
            ) : (
              <>
                {cart.map((item, i) => (
                  <div key={i} style={styles.cartItem}>
                    <div>
                      <div style={{ fontSize: 14, color: "#F5F0E8" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#9A9285" }}>{item.deptId} — {item.cat}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#C9A84C", fontFamily: "Georgia,serif" }}>{fmt(item.price)}</span>
                      <button style={{ background: "none", border: "none", color: "#ff6b6b", cursor: "pointer" }} onClick={() => removeFromCart(i)}>✕</button>
                    </div>
                  </div>
                ))}
                <div style={styles.cartFooter}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: "#9A9285", textTransform: "uppercase", letterSpacing: 1 }}>Total</span>
                    <span style={{ color: "#C9A84C", fontFamily: "Georgia,serif", fontSize: 18 }}>₦{total.toLocaleString()}</span>
                  </div>
                  <textarea style={styles.noteInput} rows={2} placeholder="Special requests or notes..." value={note} onChange={(e) => setNote(e.target.value)} />
                  <button style={styles.btnPrimary} onClick={placeOrder}>Place Order →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {toast && <div style={styles.toast}>{toast}</div>}
    </div>
  );
}

const styles = {
  screen: { background: "#FAFAF7", minHeight: "100vh", fontFamily: "sans-serif", color: "#1A1710", overflowX: "hidden" },
  loginScreen: { background: "linear-gradient(160deg,#fff9ee,#fff)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "sans-serif" },
  loginBox: { width: "100%", maxWidth: 400 },
  hotelName: { fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 400, letterSpacing: "0.15em", color: "#B8892A", margin: 0 },
  hotelSub: { fontSize: 12, letterSpacing: "0.1em", color: "#A0896A", marginTop: 4 },
  formDivider: { display: "flex", alignItems: "center", gap: 10, margin: "20px 0 16px" },
  dividerText: { fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8892A", whiteSpace: "nowrap" },
  formLabel: { display: "block", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A0896A", marginBottom: 6 },
  formInput: { width: "100%", background: "#fff", border: "1px solid rgba(184,137,42,0.35)", color: "#1A1710", padding: "10px 12px", fontFamily: "sans-serif", fontSize: 14, outline: "none", borderRadius: 4, boxSizing: "border-box" },
  btnPrimary: { width: "100%", background: "linear-gradient(135deg,#C9A84C,#B8892A)", color: "#fff", border: "none", padding: "13px 16px", fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", borderRadius: 4, marginTop: 6, boxShadow: "0 4px 14px rgba(184,137,42,0.3)" },
  wifiBox: { textAlign: "center", marginTop: 16, padding: "12px", border: "1px solid rgba(184,137,42,0.2)", borderRadius: 4, background: "#fffbf3" },
  topbar: { background: "#fff", borderBottom: "2px solid #C9A84C", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(201,168,76,0.1)" },
  topbarTitle: { fontFamily: "Georgia, serif", fontSize: 17, color: "#B8892A", letterSpacing: "0.1em", fontWeight: 700 },
  cartChip: { background: "linear-gradient(135deg,#C9A84C,#B8892A)", border: "none", color: "#fff", padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", borderRadius: 20, fontFamily: "sans-serif", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 2px 8px rgba(184,137,42,0.3)" },
  cartBadge: { background: "#fff", color: "#B8892A", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" },
  hero: { background: "linear-gradient(135deg,#B8892A,#C9A84C,#E8C97A)", padding: "24px 16px 20px", borderBottom: "none" },
  roomBadge: { display: "inline-block", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", padding: "4px 12px", fontSize: 11, fontWeight: 700, borderRadius: 20, marginBottom: 8, letterSpacing: "0.05em" },
  heroGreeting: { fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 900, fontStyle: "italic", color: "#fff", margin: "0 0 6px", textShadow: "0 2px 8px rgba(0,0,0,0.2)", letterSpacing: "-0.5px" },
  promoStrip: { display: "flex", gap: 10, padding: "14px 16px", overflowX: "auto", scrollbarWidth: "none", background: "#fffbf3" },
  promoCard: { flexShrink: 0, background: "#fff", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 8, padding: "10px 14px", minWidth: 170, boxShadow: "0 2px 8px rgba(201,168,76,0.08)" },
  promoLabel: { fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B8892A", marginBottom: 4, fontWeight: 700 },
  emergencyBar: { background: "#fff5f5", border: "1px solid rgba(220,80,80,0.2)", borderRadius: 8, margin: "12px 16px 4px", padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 10 },
  sectionLabel: { padding: "16px 16px 8px", fontSize: 10, letterSpacing: "0.25em", color: "#B8892A", fontWeight: 700 },
  deptGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, padding: "0 16px 12px" },
  deptCard: { background: "#fff", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 8, padding: "16px 12px", cursor: "pointer", position: "relative", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(201,168,76,0.07)" },
  deptBadge: { position: "absolute", top: 10, right: 10, background: "linear-gradient(135deg,#C9A84C,#B8892A)", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 7px", borderRadius: 10, letterSpacing: "0.05em" },
  deptName: { fontFamily: "Georgia, serif", fontSize: 15, color: "#1A1710", marginBottom: 3, fontWeight: 700 },
  deptSub: { fontSize: 11, color: "#A0896A", lineHeight: 1.4 },
  infoBox: { margin: "8px 16px 16px", background: "#fff", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 8, padding: "16px", boxShadow: "0 2px 8px rgba(201,168,76,0.06)" },
  infoTitle: { fontSize: 10, letterSpacing: "0.2em", color: "#B8892A", marginBottom: 12, fontWeight: 700 },
  infoRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 8, marginBottom: 8, borderBottom: "1px solid #f0ece4" },
  infoKey: { fontSize: 12, color: "#A0896A", flexShrink: 0, marginRight: 8 },
  infoVal: { fontSize: 12, color: "#1A1710", textAlign: "right", fontWeight: 600 },
  panelHeader: { background: "#fff", borderBottom: "2px solid #C9A84C", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(201,168,76,0.1)" },
  backBtn: { background: "none", border: "none", color: "#B8892A", fontSize: 18, cursor: "pointer", padding: 4, fontWeight: 700 },
  panelTitle: { fontFamily: "Georgia, serif", fontSize: 16, color: "#1A1710", flex: 1, fontWeight: 700 },
  catHeader: { padding: "14px 16px 8px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8892A", fontWeight: 800, background: "#fffbf3", borderBottom: "1px solid rgba(201,168,76,0.15)" },
  menuItem: { display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid #f0ece4", gap: 12, background: "#fff" },
  itemName: { fontSize: 14, color: "#1A1710", marginBottom: 2, fontWeight: 600 },
  itemDesc: { fontSize: 11, color: "#A0896A", lineHeight: 1.4 },
  itemRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 },
  itemPrice: { fontFamily: "Georgia, serif", fontSize: 16, color: "#B8892A", whiteSpace: "nowrap", fontWeight: 800 },
  addBtn: { background: "linear-gradient(135deg,#C9A84C,#B8892A)", border: "none", color: "#fff", width: 30, height: 30, borderRadius: "50%", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, fontWeight: 700, boxShadow: "0 2px 6px rgba(184,137,42,0.3)" },
  deptFooter: { padding: "20px 16px", borderTop: "1px solid #f0ece4", background: "#fffbf3" },
  cartOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end" },
  cartSheet: { width: "100%", background: "#fff", borderTop: "3px solid #C9A84C", borderRadius: "16px 16px 0 0", maxHeight: "80vh", overflowY: "auto" },
  cartHeader: { padding: "16px", borderBottom: "1px solid #f0ece4", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#fff" },
  cartTitle: { fontFamily: "Georgia, serif", fontSize: 18, color: "#1A1710", fontWeight: 700 },
  closeBtn: { background: "none", border: "none", color: "#A0896A", fontSize: 20, cursor: "pointer" },
  cartItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #f0ece4" },
  cartFooter: { padding: "16px", borderTop: "1px solid rgba(201,168,76,0.2)", position: "sticky", bottom: 0, background: "#fff" },
  noteInput: { width: "100%", background: "#fffbf3", border: "1px solid rgba(201,168,76,0.25)", color: "#1A1710", padding: "8px 10px", fontFamily: "sans-serif", fontSize: 12, borderRadius: 4, resize: "none", outline: "none", boxSizing: "border-box", marginBottom: 12 },
  emptyCart: { textAlign: "center", padding: "48px 16px", color: "#A0896A", fontSize: 14 },
  toast: { position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", background: "#f0fff4", border: "1px solid #4CAF50", color: "#2e7d32", padding: "8px 20px", borderRadius: 20, fontSize: 13, fontWeight: 600, zIndex: 300, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(76,175,80,0.2)" },
  successScreen: { background: "linear-gradient(160deg,#fff9ee,#fff)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "sans-serif" },
  successBox: { textAlign: "center", maxWidth: 320 },
  successTitle: { fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#B8892A", margin: "0 0 12px" },
  successText: { color: "#A0896A", fontSize: 14, lineHeight: 1.7, marginBottom: 28 },
};
