import type { User } from "../types/user";

type Gender = "men" | "women";

type MockUserSeed = {
  fn: string;
  ln: string;
  country: string;
};

// 50 Arab users
const arabUsersData: MockUserSeed[] = [
  { fn: "Ahmed", ln: "Mansour", country: "Egypt" },
  { fn: "Mariam", ln: "El-Khatib", country: "Egypt" },
  { fn: "Omar", ln: "Abdelaziz", country: "Saudi Arabia" },
  { fn: "Nour", ln: "El-Sherif", country: "Egypt" },
  { fn: "Mahmoud", ln: "Hassan", country: "United Arab Emirates" },
  { fn: "Farida", ln: "Mostafa", country: "Egypt" },
  { fn: "Salma", ln: "Hegazy", country: "Egypt" },
  { fn: "Karim", ln: "El-Gohary", country: "Kuwait" },
  { fn: "Youssef", ln: "El-Sayed", country: "Egypt" },
  { fn: "Yasmine", ln: "Shawky", country: "Jordan" },
  { fn: "Hana", ln: "Badawy", country: "Egypt" },
  { fn: "Khaled", ln: "Ibrahim", country: "Saudi Arabia" },
  { fn: "Dina", ln: "Radwan", country: "Lebanon" },
  { fn: "Tarek", ln: "Fahmy", country: "Egypt" },
  { fn: "Aya", ln: "El-Naggar", country: "Qatar" },
  { fn: "Mostafa", ln: "Kamel", country: "Egypt" },
  { fn: "Layla", ln: "Abdelrahman", country: "United Arab Emirates" },
  { fn: "Amr", ln: "El-Baz", country: "Egypt" },
  { fn: "Habiba", ln: "Salem", country: "Morocco" },
  { fn: "Ziad", ln: "Tawfik", country: "Egypt" },
  { fn: "Hossam", ln: "Ghanem", country: "Saudi Arabia" },
  { fn: "Rania", ln: "Shaker", country: "Egypt" },
  { fn: "Sherif", ln: "Nasser", country: "Kuwait" },
  { fn: "Nadine", ln: "Zaki", country: "Egypt" },
  { fn: "Hesham", ln: "Farouk", country: "Bahrain" },
  { fn: "Menna", ln: "Allam", country: "Egypt" },
  { fn: "Waleed", ln: "Samy", country: "Saudi Arabia" },
  { fn: "Reem", ln: "Sobhy", country: "Oman" },
  { fn: "Hazem", ln: "Galal", country: "Egypt" },
  { fn: "Mona", ln: "Fouad", country: "Tunisia" },
  { fn: "Ayman", ln: "Othman", country: "Egypt" },
  { fn: "Heba", ln: "Hamdy", country: "United Arab Emirates" },
  { fn: "Bassem", ln: "Rashad", country: "Egypt" },
  { fn: "Sara", ln: "Ezzat", country: "Jordan" },
  { fn: "Hany", ln: "Gouda", country: "Egypt" },
  { fn: "Noha", ln: "Metwally", country: "Saudi Arabia" },
  { fn: "Sameh", ln: "Soliman", country: "Egypt" },
  { fn: "Ghada", ln: "Ashraf", country: "Qatar" },
  { fn: "Eslam", ln: "Younis", country: "Egypt" },
  { fn: "Mai", ln: "Wahba", country: "Lebanon" },
  { fn: "Moataz", ln: "Qandil", country: "Egypt" },
  { fn: "Nada", ln: "Hafez", country: "Morocco" },
  { fn: "Alaa", ln: "Abaza", country: "Egypt" },
  { fn: "Shereen", ln: "Amer", country: "Saudi Arabia" },
  { fn: "Ramy", ln: "Bakr", country: "Egypt" },
  { fn: "Engy", ln: "Mahdy", country: "Bahrain" },
  { fn: "Seif", ln: "Khattab", country: "Egypt" },
  { fn: "Donia", ln: "Wagdy", country: "United Arab Emirates" },
  { fn: "Marwan", ln: "Fikry", country: "Egypt" },
  { fn: "Malak", ln: "Shoeib", country: "Kuwait" },
];

// 50 International users
const internationalUsersData: MockUserSeed[] = [
  { fn: "Elena", ln: "Rostova", country: "United States" },
  { fn: "Marcus", ln: "Vance", country: "United Kingdom" },
  { fn: "Sophia", ln: "Chen", country: "Canada" },
  { fn: "Liam", ln: "Garcia", country: "Ireland" },
  { fn: "David", ln: "Miller", country: "Germany" },
  { fn: "Chloe", ln: "Hernandez", country: "Japan" },
  { fn: "Alexander", ln: "Wright", country: "Australia" },
  { fn: "Lucas", ln: "Silva", country: "Brazil" },
  { fn: "Freja", ln: "Lindqvist", country: "Sweden" },
  { fn: "Mei-Ling", ln: "Zhou", country: "Taiwan" },
  { fn: "Gabriel", ln: "Rossi", country: "Italy" },
  { fn: "Aria", ln: "Kim", country: "South Korea" },
  { fn: "Ethan", ln: "Anderson", country: "United States" },
  { fn: "Maya", ln: "Taylor", country: "United Kingdom" },
  { fn: "Daniel", ln: "Thomas", country: "Canada" },
  { fn: "Camila", ln: "Jackson", country: "Spain" },
  { fn: "Mateo", ln: "White", country: "Spain" },
  { fn: "Charlotte", ln: "Harris", country: "France" },
  { fn: "Sebastian", ln: "Martin", country: "Germany" },
  { fn: "Amelia", ln: "Thompson", country: "Australia" },
  { fn: "Isabella", ln: "Martinez", country: "Spain" },
  { fn: "Julian", ln: "Robinson", country: "United Kingdom" },
  { fn: "Harper", ln: "Clark", country: "United States" },
  { fn: "Leo", ln: "Rodriguez", country: "Brazil" },
  { fn: "Evelyn", ln: "Lewis", country: "Canada" },
  { fn: "Abigail", ln: "Lee", country: "United States" },
  { fn: "Henry", ln: "Walker", country: "Germany" },
  { fn: "Emily", ln: "Hall", country: "France" },
  { fn: "Lucas", ln: "Young", country: "Netherlands" },
  { fn: "Jack", ln: "King", country: "United Kingdom" },
  { fn: "Ella", ln: "Lopez", country: "Spain" },
  { fn: "Owen", ln: "Hill", country: "Australia" },
  { fn: "Elizabeth", ln: "Scott", country: "United States" },
  { fn: "Wyatt", ln: "Green", country: "Canada" },
  { fn: "Sofia", ln: "Adams", country: "Italy" },
  { fn: "Carter", ln: "Baker", country: "United States" },
  { fn: "Avery", ln: "Gonzalez", country: "Spain" },
  { fn: "Jayden", ln: "Nelson", country: "United Kingdom" },
  { fn: "Scarlett", ln: "Mitchell", country: "Australia" },
  { fn: "Luke", ln: "Perez", country: "Germany" },
  { fn: "Grace", ln: "Roberts", country: "United States" },
  { fn: "Grayson", ln: "Turner", country: "Canada" },
  { fn: "Victoria", ln: "Phillips", country: "France" },
  { fn: "Riley", ln: "Campbell", country: "Ireland" },
  { fn: "Lily", ln: "Parker", country: "United Kingdom" },
  { fn: "Levi", ln: "Evans", country: "United States" },
  { fn: "Hannah", ln: "Edwards", country: "United States" },
  { fn: "Noah", ln: "Collins", country: "United States" },
  { fn: "Oliver", ln: "Stewart", country: "United Kingdom" },
  { fn: "Zoe", ln: "Martinez", country: "Spain" },
];

const rolesPool: Array<"Admin" | "Editor" | "Moderator" | "User"> = [
  "Admin",
  "Editor",
  "Moderator",
  "User",
  "User",
  "Editor",
  "User",
];

const plansPool: Array<"Free" | "Pro" | "Enterprise"> = [
  "Enterprise",
  "Pro",
  "Enterprise",
  "Pro",
  "Free",
  "Pro",
  "Free",
];

const statusesPool: Array<
  "Active" | "Inactive" | "Suspended" | "Banned"
> = [
  "Active",
  "Active",
  "Active",
  "Active",
  "Active",
  "Inactive",
  "Suspended",
  "Active",
  "Banned",
];

const femaleNames = new Set([
  "Mariam",
  "Nour",
  "Farida",
  "Salma",
  "Yasmine",
  "Hana",
  "Dina",
  "Aya",
  "Layla",
  "Habiba",
  "Rania",
  "Nadine",
  "Menna",
  "Reem",
  "Mona",
  "Heba",
  "Sara",
  "Noha",
  "Ghada",
  "Mai",
  "Nada",
  "Shereen",
  "Engy",
  "Donia",
  "Malak",
  "Elena",
  "Sophia",
  "Chloe",
  "Freja",
  "Mei-Ling",
  "Aria",
  "Maya",
  "Camila",
  "Charlotte",
  "Amelia",
  "Isabella",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Ella",
  "Elizabeth",
  "Sofia",
  "Avery",
  "Scarlett",
  "Grace",
  "Victoria",
  "Riley",
  "Lily",
  "Hannah",
  "Zoe",
]);

const getGender = (firstName: string): Gender => {
  return femaleNames.has(firstName) ? "women" : "men";
};

// Add gender without changing the original visible user data.
const combinedUsersList: Array<MockUserSeed & { gender: Gender }> = [
  ...arabUsersData,
  ...internationalUsersData,
]
  .map((user) => ({
    ...user,
    gender: getGender(user.fn),
  }))
  .sort(() => Math.random() - 0.5);

let maleAvatarIndex = 0;
let femaleAvatarIndex = 0;

export const mockUsers: User[] = combinedUsersList.map(
  (userItem, index) => {
    const num = index + 1;

    const padId = `usr_${
      num < 10 ? `00${num}` : num < 100 ? `0${num}` : num
    }`;

    const fullName = `${userItem.fn} ${userItem.ln}`;

    const cleanFn = userItem.fn
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    const cleanLn = userItem.ln
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    const role = rolesPool[index % rolesPool.length];
    const plan = plansPool[index % plansPool.length];

    const safeFictionalDomains = [
      "dokkany.dev",
      "dokkany.test",
      "example.com",
    ];

    const chosenDomain =
      safeFictionalDomains[index % safeFictionalDomains.length];

    const email = `${cleanFn}.${cleanLn}@${chosenDomain}`;

    // Use gender-specific avatars.
    const imageIndex =
      userItem.gender === "women"
        ? femaleAvatarIndex++ % 50
        : maleAvatarIndex++ % 50;

    const avatar = `https://randomuser.me/api/portraits/${userItem.gender}/${imageIndex}.jpg`;

    const month = (index % 12) + 1;
    const day = (index % 28) + 1;

    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dayStr = day < 10 ? `0${day}` : `${day}`;

    const year = 2024 + (index % 2);
    const joinedHourStr = String((index * 2) % 24).padStart(2, "0");

    const joinedAt = `${year}-${monthStr}-${dayStr}T${joinedHourStr}:15:00Z`;

    const recentDay = 4 - (index % 5);
    const recentDayVal = recentDay > 0 ? recentDay : 4;

    const recentDayStr = String(recentDayVal).padStart(2, "0");
    const hourStr = String((index * 3) % 24).padStart(2, "0");
    const minStr = String((index * 7) % 60).padStart(2, "0");

    const lastLogin = `2026-08-${recentDayStr}T${hourStr}:${minStr}:00Z`;

    return {
      id: padId,
      avatar,
      fullName,
      email,
      role,
      plan,
      status: statusesPool[index % statusesPool.length],
      country: userItem.country,
      joinedAt,
      lastLogin,
    };
  }
);