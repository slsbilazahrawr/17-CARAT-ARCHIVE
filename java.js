// DATA PERMEMBER UNTUK DICE MATCH & FACTS
const membersData = [
  { name: "S.Coups 🍒", desc: "Leader sejati yang sangat protektif, bertubuh atletis tapi very clingy ke para member!", img: "images/dadu/scoups.jpg" },
  { name: "Jeonghan 😇", desc: "Malaikat cerdik ahli strategi paling jahil di GoSe yang tak pernah mau kalah!", img: "images/dadu/jeonghan.jpg" },
  { name: "Joshua 🐰", desc: "Gentleman manis dari LA dengan vokal syahdu dan aksinya yang tak terduga!", img: "images/dadu/joshua.jpg" },
  { name: "Jun 🐱", desc: "Visual tampan asal Tiongkok, jago wushu, polos dan punya imajinasi unik!", img: "images/dadu/jun.jpg" },
  { name: "Hoshi 🐯", desc: "Captain Horanghae! Pembuat koreografi ikonik dengan energi luar biasa di panggung!", img: "images/dadu/hoshi.jpg" },
  { name: "Wonwoo 🦊", desc: "Rapper bersuara deep yang terkesan dingin padahal sangat hangat dan suka membaca!", img: "images/dadu/wonwoo.jpg" },
  { name: "Woozi 🍚", desc: "Produser jenius di balik semua lagu hits SEVENTEEN, mungil tapi sangat berkarisma!", img: "images/dadu/woozi.jpg" },
  { name: "The8 🐸", desc: "King of Fashion & Breakdance dengan pemikiran hidup yang super tenang dan bijak!", img: "images/dadu/the8.jpg" },
  { name: "Mingyu 🐶", desc: "Visual tinggi ganteng yang serba bisa, dari masak porsi besar sampai perbaiki perabotan!", img: "images/dadu/mingyu.jpg" },
  { name: "DK 🍕", desc: "Sunshine main vocalist bersuara merdu yang selalu bikin suasana jadi ceria!", img: "images/dadu/dk.jpg" },
  { name: "Seungkwan 🍊", desc: "Raja Variety Show & penyanyi berbakat yang sangat ramah dan disukai semua orang!", img: "images/dadu/seungkwan.jpg" },
  { name: "Vernon 🐻", desc: "Rapper santai dengan jiwa seni tinggi, tapi terkadang dia terlalu santai!", img: "images/dadu/vernon.jpg" },
  { name: "Dino 🦦", desc: "Maknae kebanggaan dengan skill dance di atas rata-rata dan masa depan K-Pop!", img: "images/dadu/dino.jpg" }
];

// 1. DADU KEBERUNTUNGAN (ROLL DICE)
function rollDiceMatch() {
  const dice = document.getElementById('dice-element');
  if (!dice) return;

  dice.classList.add('rolling');

  setTimeout(() => {
    dice.classList.remove('rolling');
    
    const randomIndex = Math.floor(Math.random() * membersData.length);
    const selected = membersData[randomIndex];

    document.getElementById('bias-modal-img').src = selected.img;
    document.getElementById('bias-modal-name').textContent = selected.name;
    document.getElementById('bias-modal-desc').textContent = selected.desc;

    document.getElementById('bias-modal').style.display = 'flex';

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F7CAC9', '#91A8D0', '#FFFFFF']
      });
    }
  }, 700);
}

function closeBiasModal() {
  document.getElementById('bias-modal').style.display = 'none';
}

// 2. SIDE DRAWER SLIDING PANEL UNTUK PROFIL MEMBER
function openDrawer(name, realName, unit, dob, emoji, fact, imgSrc) {
  document.getElementById('drawer-name').textContent = name;
  document.getElementById('drawer-realname').textContent = realName;
  document.getElementById('drawer-unit').textContent = unit;
  document.getElementById('drawer-dob').textContent = dob;
  document.getElementById('drawer-fact').textContent = fact;
  document.getElementById('drawer-img').src = imgSrc;

  document.getElementById('drawer-overlay').style.display = 'block';
  document.getElementById('member-drawer').classList.add('open');
}

function closeDrawer() {
  document.getElementById('drawer-overlay').style.display = 'none';
  document.getElementById('member-drawer').classList.remove('open');
}

// 3. FILTER UNIT MEMBER (ALL, HIP-HOP, VOCAL, PERFORMANCE)
function filterUnit(unitClass, btnElement) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  const cards = document.querySelectorAll('.member-card');
  cards.forEach(card => {
    if (unitClass === 'all' || card.classList.contains(unitClass)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 4. OVERLAY / NAVIGASI MENYALA KETIKA SCROLL BERPINDAH SECTION
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
// Tambahkan parameter detailImgSrc di akhir
function openDrawer(name, realName, unit, dob, emoji, fact, imgSrc, detailImgSrc) {
  document.getElementById('drawer-name').textContent = name;
  document.getElementById('drawer-realname').textContent = realName;
  document.getElementById('drawer-unit').textContent = unit;
  document.getElementById('drawer-dob').textContent = dob;
  document.getElementById('drawer-fact').textContent = fact;
  
  // Jika detailImgSrc diisi, gunakan foto detail. Jika tidak, gunakan foto kartu biasa.
  document.getElementById('drawer-img').src = detailImgSrc || imgSrc;

  document.getElementById('drawer-overlay').style.display = 'block';
  document.getElementById('member-drawer').classList.add('open');
}