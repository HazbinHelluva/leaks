const fs = require("fs");

const scriptPath = "script.js";
let scriptContent = fs.readFileSync(scriptPath, "utf8");

// Попробуем извлечь только массив items
const itemsMatch = scriptContent.match(/const items = (\[[\s\S]*?\]);/);
if (!itemsMatch) {
    console.error("❌ Массив items не найден!");
    process.exit(1);
}

// Добавляем обертку, чтобы обрабатывать как JS-код
let items;
try {
    items = eval(`(${itemsMatch[1]})`);
} catch (error) {
    console.error("❌ Ошибка при разборе items:", error);
    process.exit(1);
}

// Получаем сегодняшнюю дату в формате "ДД.ММ.ГГГГ"
const today = new Date();
const todayStr = today.toLocaleDateString("ru-RU");

// Функция для вычисления разницы в днях между двумя датами
function daysBetween(date1, date2) {
    const [d1, m1, y1] = date1.split(".").map(Number);
    const [d2, m2, y2] = date2.split(".").map(Number);
    const firstDate = new Date(y1, m1 - 1, d1);
    const secondDate = new Date(y2, m2 - 1, d2);
    return Math.floor((secondDate - firstDate) / (1000 * 60 * 60 * 24)); // Разница в днях
}

// Обновляем статус isNew и id
items.forEach(item => {
    if (item.dateAdded && item.isNew) {
        const daysDiff = daysBetween(item.dateAdded, todayStr);
        if (daysDiff >= 7) { // Если прошло 7 дней
            item.isNew = false;
            item.id = 0;
        }
    }
});

// Преобразуем обратно в строку
const updatedScript = scriptContent.replace(
    /const items = \[[\s\S]*?\];/,
    `const items = ${JSON.stringify(items, null, 4)};`
);

// Записываем обратно в файл
fs.writeFileSync(scriptPath, updatedScript, "utf8");

console.log("✅ Статусы обновлены!");
