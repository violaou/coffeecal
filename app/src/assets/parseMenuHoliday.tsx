export {}
/*
Product Name (1)
Size (2)
Milk (3)
Whip (4)
Extras (5)
Serving Size
Calories
Total Fat (g)
Saturated Fat (g)
Trans Fat (g)
Cholesterol (mg)
Sodium (mg)
Total Carbohydrates (g)
Dietary Fiber (g)
Sugar (g)
Protein (g)
Vitamin A (%DV)
Vitamin C (%DV)
Calcium (%DV)
Iron (%DV)
Caffeine (mg)

Caramel Brûlé Latte
Short
Nonfat
No Whip
N/A
236 mL
160
0.2
0.2
0
5
120
33
0
25
6
8%
0%
15%
0%
75
Caramel Brûlé Latte
Short
Nonfat
Whip
N/A
236 mL
220
5
3.5
0.2
20
125
36
0
28
6
15%
0%
20%
0%
75
*/

/*
------LOGIC------
Every 21 lines theres a new drink
possible ways to parse:
  iterate every 21 lines title-> size...-> skip next 10 lines (O(n) time)
  Start from the top /bottom and meet at the middle? idk hmm
  cut doc into 21 per line chunks and then parse each chunk (is this more efficent in javascript?)
*/

// returns a drink obj with desired info per 21 lines of drinks
// function generateHolidayDrink(paragraph: string): Drink | undefined {
//     if (paragraph) {
//         const infoMatch = paragraph.match(REGEX);
//         const nameMatch = paragraph.match(NAME_REGEX);
//         let info: RegExpMatchArray | null = infoMatch ? infoMatch[0].match(LINE_REGEX) : null;
//         let name: string| null = nameMatch ? nameMatch[0] : '';

//         if (info) {
//             const whip = info[2] === "No";
//               var whipp = function () {
//                 var term = info[2]
//                 if (term === 'No') {
//                 info = info.slice(4)
//                 return 'No Whip'
//                 }
//                 info = info.slice(3)
//                 return term // Whip, N/A
//             }
//             const drink: Drink = {
//                 name: name,
//                 size: info[0] as DrinkSize,
//                 milk: info[1] as Milk,
//                 whip: (whip ? info[2] : info[2] + info[3]) as Whip,
//                 kcal: parseInt(whip ? info[3] : info[4]),
//             }
//             return drink;
//         }
//     }
