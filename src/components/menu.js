const menu = (() => {
  const middle = document.createElement("div");
  middle.id = "middle";

  const menuHeader = document.createElement("div");
  menuHeader.id = "menuHeader";

  const menuTitle = document.createElement("p");
  menuTitle.id = "menuTitle";
  menuTitle.textContent = "MENU";

  const appetizers = document.createElement("div");
  appetizers.id = "appetizers";
  appetizers.classList.add('background');

  const appetizersTitle = document.createElement("p");
  appetizersTitle.id="appetizersTitle";
  appetizersTitle.classList.add('title');
  appetizersTitle.textContent ="APPETIZERS";

  const appetizersWrapper = document.createElement("div");
  appetizersWrapper.id = "appetizersWrapper";
  appetizersWrapper.classList.add('wrapper');

  const appetizersElements = document.createElement("p");
  appetizersElements.id="appetizersElements";
  appetizersElements.classList.add('pre-wrap');
  appetizersElements.classList.add('elements');
  appetizersElements.textContent="Truffle Parmesan Fries:\nCrispy golden fries dusted with grated Parmesan cheese and drizzled with truffle oil, served with garlic aioli.\n\nCrispy Onion Rings\nLightly battered onion rings, fried to perfection and served with a tangy chipotle dipping sauce.\n\nGourmet Sliders Trio\nA sampler of three mini burgers featuring beef, chicken, and veggie patties, each with unique toppings and house-made sauces.\n\nCaprese Skewers\nFresh cherry tomatoes, creamy mozzarella, and fragrant basil, drizzled with balsamic glaze and served on skewers.\n\nSpicy Buffalo Wings\nCrispy chicken wings tossed in a tangy and spicy buffalo sauce, served with a side of cooling blue cheese dip and celery sticks.\n\nStuffed Mushroom Caps\nBaked mushroom caps filled with a savory blend of cream cheese, garlic, spinach, and Parmesan, topped with breadcrumbs for a crispy finish.\n\nArtisan Cheese & Charcuterie Board\nA selection of fine cheeses, cured meats, olives, nuts, and artisan bread, perfect for sharing and pairing with your favorite wine."
  
  const appetizersPrice = document.createElement("div");
  appetizersPrice.id = "appetizersPrice";
  appetizersPrice.classList.add('pre-wrap');
  appetizersPrice.textContent="€8\n\n\n€7\n\n\n€12\n\n\n€9\n\n\n€10\n\n\n€11\n\n\n€14"

  const burgers = document.createElement('div');
  burgers.id = "burgers";
  burgers.classList.add('background');

  const burgersTitle = document.createElement('p');
  burgersTitle.id = "burgersTitle"
  burgersTitle.classList.add('title');
  burgersTitle.textContent = "SIGNATURE BURGERS";

  const burgersWrapper = document.createElement("div")
  burgersWrapper.id = "burgersWrapper";
  burgersWrapper.classList.add('wrapper');

  const burgersElements = document.createElement('p');
  burgersElements.id = "burgersElements";
  burgersElements.classList.add('pre-wrap');
  burgersElements.classList.add('elements');
  burgersElements.textContent="The Royal Patty\nA succulent beef patty topped with aged cheddar, caramelized onions, lettuce, tomato, and house-made Palace sauce, served on a toasted brioche bun.\n\nThe Tuscan Chicken\nJuicy grilled chicken breast with sun-dried tomatoes, fresh mozzarella, basil pesto, and arugula, served on a toasted ciabatta roll.\n\nThe Veggie Delight\nA flavorful house-made veggie patty with avocado, pickled red onions, mixed greens, and chipotle mayo, served on a multigrain bun.\n\nThe Smoky BBQ Bacon\nJuicy beef patty, smoked bacon, cheddar cheese, crispy onion strings, lettuce, tomato, house-made smoky BBQ sauce, toasted brioche bun.\n\nThe Spicy Jalapeño\nBold beef patty, pepper jack cheese, pickled jalapeños, lettuce, tomato, spicy sriracha mayo, toasted brioche bun.\n\nThe Surf 'n' Turf\nSucculent beef patty, grilled shrimp, garlic herb butter, lettuce, tomato, toasted brioche bun.\n\nThe Mushroom Swiss\nMouthwatering beef patty, sautéed mushrooms, Swiss cheese, lettuce, tomato, creamy garlic aioli, toasted brioche bun.\n\nThe Chipotle Turkey\nTender turkey patty, pepper jack cheese, avocado, lettuce, tomato, smoky chipotle mayo, toasted ciabatta roll.";

  const burgersPrice = document.createElement('p');
  burgersPrice.id = "burgersPrice";
  burgersPrice.classList.add('pre-wrap');
  burgersPrice.textContent="€14\n\n\n€13\n\n\n€12\n\n\n€15\n\n\n€14\n\n\n€18\n\n\n€13\n\n\n€12";

  const salads = document.createElement('div');
  salads.id = "salads"
  salads.classList.add('background');

  const saladsTitle = document.createElement('p');
  saladsTitle.classList.add('title');
  saladsTitle.id = "saladsTitle"
  saladsTitle.textContent = "SALADS";

  const saladsWrapper = document.createElement("div")
  saladsWrapper.id = "saladsWrapper";
  saladsWrapper.classList.add('wrapper');

  const saladsElements = document.createElement('p');
  saladsElements.id = "saladsElements";
  saladsElements.classList.add('pre-wrap');
  saladsElements.classList.add('elements');
  saladsElements.textContent="Grilled Chicken Caesar Salad\nTender grilled chicken, crisp romaine lettuce, Parmesan cheese, house-made croutons, classic Caesar dressing.\n\nQuinoa & Avocado Salad\nRefreshing mix of quinoa, avocado, cherry tomatoes, cucumber, red onion, zesty lemon dressing.\n\nCobb Salad\nMixed greens, grilled chicken, bacon, hard-boiled eggs, avocado, cherry tomatoes, crumbled blue cheese, and a creamy ranch dressing.\n\nGreek Salad\nRomaine lettuce, cucumber, tomatoes, red onion, Kalamata olives, feta cheese, and a tangy Greek dressing.\n\nSpinach & Strawberry Salad\nBaby spinach, fresh strawberries, goat cheese, candied pecans, and a sweet balsamic vinaigrette.\n\nAsian Sesame Chicken Salad\nGrilled chicken, mixed greens, mandarin oranges, edamame, crispy wonton strips, and a tangy Asian sesame dressing."
  const saladsPrice = document.createElement('p');
  saladsPrice.id = "saladsPrice";
  saladsPrice.classList.add('pre-wrap');
  saladsPrice.textContent="€11\n\n\n€10\n\n\n€12\n\n\n€10\n\n\n€11\n\n\n€13";

  const desserts = document.createElement('div');
  desserts.id = "desserts"
  desserts.classList.add('background');

  const dessertsTitle = document.createElement('p');
  dessertsTitle.classList.add('title');
  dessertsTitle.id = "dessertsTitle"
  dessertsTitle.textContent = "DESSERTS";

  const dessertsWrapper = document.createElement("div")
  dessertsWrapper.id = "dessertsWrapper";
  dessertsWrapper.classList.add('wrapper');

  const dessertsElements = document.createElement('p');
  dessertsElements.id = "dessertsElements";
  dessertsElements.classList.add('pre-wrap');
  dessertsElements.classList.add('elements');
  dessertsElements.textContent="Warm Chocolate Lava Cake\nDecadent chocolate cake with a molten chocolate center, served with a scoop of vanilla ice cream.\n\nNew York Cheesecake\nRich and creamy classic New York cheesecake with a graham cracker crust and a seasonal berry coulis\n\nTiramisu\nClassic Italian dessert with layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder.\n\nFruit Salad\nA refreshing mix of seasonal fruits, served with a zesty honey lime dressing.\n\nApple Crumble\nWarm and spiced cinnamon apples topped with a buttery crumble, served with a scoop of vanilla ice cream.\n\nChocolate Brownie Sundae\nGooey chocolate brownie topped with vanilla ice cream, hot fudge sauce, whipped cream, and a cherry."
  const dessertsPrice = document.createElement('p');
  dessertsPrice.id = "dessertsPrice";
  dessertsPrice.classList.add('pre-wrap');
  dessertsPrice.textContent="€8\n\n\n€7\n\n\n€8\n\n\n€6\n\n\n€7\n\n\n€9";

  const beverages = document.createElement('div');
  beverages.id = "beverages"
  beverages.classList.add('background');

  const beveragesTitle = document.createElement('p');
  beveragesTitle.classList.add('title');
  beveragesTitle.id = "beveragesTitle"
  beveragesTitle.textContent = "BEVERAGES";

  const beveragesWrapper = document.createElement("div")
  beveragesWrapper.id = "dessertsWrapper";
  beveragesWrapper.classList.add('wrapper');

  const beveragesElements = document.createElement('p');
  beveragesElements.id = "beveragesElements";
  beveragesElements.classList.add('pre-wrap');
  beveragesElements.classList.add('elements');
  beveragesElements.textContent="Classic Milkshakes\nChoose from our selection of vanilla, chocolate, or strawberry milkshakes made with real ice cream and topped with whipped cream.\n\nSoft Drinks\nA variety of refreshing sodas, including cola, lemon-lime, and orange flavors.\n\nLemonade\nFreshly squeezed lemonade, sweetened to perfection.\n\nIced Tea\nClassic iced tea, served with or without lemon.\n\nHot Coffee\nAromatic, freshly brewed coffee, available in regular or decaffeinated.\n\nHot Tea\nChoose from a variety of herbal, black, or green tea blends.\n\nSmoothies\nDelicious and nutritious fruit smoothies, made with your choice of strawberries, bananas, mangoes, or mixed berries.\n\nBottled Water\nRefreshing still or sparkling water, served chilled.";
  const beveragesPrice = document.createElement('p');
  beveragesPrice.id = "beveragesPrice";
  beveragesPrice.classList.add('pre-wrap');
  beveragesPrice.textContent="€5\n\n\n€3\n\n\n€4\n\n\n€3\n\n\n€2\n\n\n€2\n\n\n€6\n\n\n€1";

  const content = document.getElementById("content");

  const body = () => {
    const footer = document.getElementById("footer");

    menuHeader.appendChild(menuTitle);
    appetizersWrapper.append(appetizersElements,appetizersPrice);
    appetizers.append(appetizersTitle,appetizersWrapper);

    burgersWrapper.append(burgersElements,burgersPrice);
    burgers.append(burgersTitle,burgersWrapper)

    saladsWrapper.append(saladsElements,saladsPrice);
    salads.append(saladsTitle,saladsWrapper);

    dessertsWrapper.append(dessertsElements,dessertsPrice);
    desserts.append(dessertsTitle,dessertsWrapper);

    beveragesWrapper.append(beveragesElements,beveragesPrice);
    beverages.append(beveragesTitle,beveragesWrapper);

    middle.append(menuHeader,appetizers,burgers,salads,desserts,beverages);
    content.insertBefore(middle, footer);
  };
  return body;
})();
export default menu;
