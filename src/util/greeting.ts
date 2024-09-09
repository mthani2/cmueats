import assert from './assert';
import bounded from './misc';

const graveyard = [
	'Staying up all night?',
	'Want a late-night snack?',
	"Don't stay up too late!",
	'Delivery too expensive?',
	'Pulling an all-nighter? Let us fuel your focus!',
	'When the world sleeps, your snack game is strong!',
	'Late night genius? Keep it going with a bite!',
	'Need a boost for your midnight grind?',
	"It's quiet, but your cravings aren't—time for a snack!",
	"Midnight snack attack? We've got the fix!",
	'The stars are out, and so are the snacks!',
	'Awake while others dream? Power up with a late-night bite!',
	'The night is still, but your hunger is alive—let us satisfy your cravings.',
	'Under the moonlight, every bite is a midnight delight.',
	'As the world dreams, let us awaken your taste buds.',
	'In the silence of the night, find your perfect midnight snack.',
	"Stars above, a snack below—let's make the night magical.",
	'In the quiet hours, let every bite be a whisper of comfort.',
	"The moon may shine, but your cravings glow brighter—let's indulge.",
	'When the night is deep, let us serve something to keep you going.',
	'In the stillness of the night, let your cravings whisper to the stars.',
	'Where the darkness is endless, let your meal be a spark of joy.',
	'In the quiet of midnight, your hunger calls—let us answer softly.',
	'When the world sleeps, let your senses awaken to something extraordinary.',
	'The night wraps around you like a dream—let us offer a taste to match its beauty.',
	'A moment in the moonlight, a bite to soothe your soul.',
	'In the shadows of the night, let your hunger find solace in every flavor.',
	'In the hush of the night, let your hunger find solace in every sweet bite.',
	'As the moon watches over, let your meal be a quiet dance of flavors.',
	'The stars write stories, and tonight, your meal is the chapter that nourishes your soul.',
	'Let the cool night breeze guide you to a feast made for midnight dreamers.',
	'Under the canvas of night, let each taste paint a picture of comfort and delight.',
	'As darkness falls, let your meal be the beacon that lights your way.',
	'The night whispers mysteries—let us reveal them one delicious bite at a time.',
	'In the silence between stars, your hunger calls—let us craft a meal to answer.',
];
const morning = [
	'Fancy some breakfast?',
	'Is breakfast really the most important meal of the day?',
	'What do you want to eat?',
	'Have a good morning!',
	'Start your day with a delicious meal!',
	'Time to refuel for the day ahead!',
	'Breakfast is calling your name!',
	"Sun's up, breakfast is served!",
	"Rise and shine, it's breakfast time!",
	'Fuel the morning hustle with something delicious!',
	'The best way to start your day? A tasty breakfast!',
	'Your morning journey starts with breakfast!',
	'The campus is waking up—join in with breakfast!',
	"Your day's first win: a perfect breakfast!",
	'Before you conquer the day, conquer breakfast!',
	'The breakfast bell is ringing—are you answering?',
	'As dawn kisses the horizon, let your meal be the first light of your day.',
	'With the sunrise comes the promise of something beautiful—let breakfast be that promise.',
	'The morning sky is painted with hope—let your breakfast be as inspiring.',
	'In the gentle glow of the morning, let your meal be a soft embrace to start your day.',
	'With each ray of sun, a new taste awaits—let breakfast be your first adventure.',
	'Morning dew and fresh beginnings—let breakfast carry you into the day with grace.',
	'Let the quiet beauty of the morning reflect in every bite you take.',
	'The world awakens softly—let your breakfast do the same, filling you with warmth.',
	'As the morning sky blushes, let your breakfast bloom with promise and joy.',
	'Like the first light of day, let your meal unfold with grace and beauty.',
	'With each sunrise, the world is reborn—let your breakfast be the start of something new.',
	'In the golden embrace of morning, let your plate be a symphony of flavors.',
	'As the sun climbs, let your spirit and hunger rise together, fed by something wonderful.',
	'Morning light and fresh beginnings—let your meal be a moment of pure poetry.',
	'The dawn breaks gently, and so does the warmth of your first bite—welcome the day with joy.',
	'Let the soft light of morning carry you to a breakfast as gentle as the breeze.',
];
const afternoon = [
	'What do you want for lunch?',
	'What do you want to eat?',
	'Have a good afternoon!',
	'Use those blocks!',
	'Fuel up for the afternoon!',
	'Lunch options galore!',
	'Satisfy your midday hunger!',
	'Craving something savory for lunch?',
	"Midday munchies? We've got you covered!",
	'Halfway through the day—time for a lunch break!',
	"What's for lunch? Let's make it awesome!",
	"The afternoon slump's no match for a great lunch!",
	'Hit reset on your day with a satisfying lunch!',
	'Midday fuel-up to keep you moving!',
	'Break away from the books—lunch awaits!',
	'Recharge with the perfect lunch combo!',
	"Afternoon cravings? Let's handle them with style!",
	'The day reaches its peak—let lunch be your pause in the whirlwind of time.',
	'As the sun reaches high, let your plate reflect the abundance of the day.',
	'The afternoon is a canvas, and your meal is the brushstroke of calm in the rush.',
	'In the warmth of the afternoon, let each flavor bloom like a flower in the sun.',
	"Let your lunch be a gentle retreat, a quiet breath amid the day's rhythm.",
	'As the day unfolds, let every bite be a reminder to savor the beauty around you.',
	'In the stillness between hours, let your meal be a moment to reflect and rejuvenate.',
	'As the sun sits high in the sky, let your meal be the calm in the midst of the day’s rhythm.',
	'The afternoon glows with possibility—let your lunch be the spark that fuels your journey.',
	'Beneath the midday sun, let every bite be a reminder of the beauty in small moments.',
	'In the warmth of the afternoon, let your meal be a pause, a gentle breath between hours.',
	'The day stretches long, but let your lunch shorten the distance with a taste of joy.',
	'As time marches on, let your meal be a moment suspended in delicious peace.',
	'In the golden hours of the afternoon, let your plate be as radiant as the sun above.',
	'Let your lunch carry you like the wind—light, freeing, and full of life.',
];
const evening = [
	'What do you want for dinner?',
	'What do you want to eat?',
	'Have a good evening!',
	'Grab a bite to eat!',
	'Hungry night owl?',
	"Midnight munchies? We've got you!",
	'Evenings are for unwinding—and great food!',
	'The best part of your day? A delicious dinner!',
	"Make tonight's dinner the highlight of your day!",
	"Evening cravings? Let's turn them into dinner delights!",
	'After a long day, you deserve a feast!',
	'Dinner time—where cravings meet satisfaction!',
	'Dine like a star tonight—what are you in the mood for?',
	"The day's done—now it's time for a dinner victory!",
	"Evenings and comfort food go hand-in-hand—let's get started!",
	"As the sun fades, let your dinner be a celebration of the day's journey.",
	'In the twilight, let each taste linger like a soft memory, rich and deep.',
	'Beneath the evening sky, let your meal be a serenade to the night.',
	'The evening breeze whispers of rest—let dinner be your gentle companion.',
	'The night falls gently, and so does your hunger—let us satisfy it with something unforgettable.',
	'In the stillness of nightfall, let each bite be a promise of comfort and peace.',
	'As the world grows quiet, let your dinner speak the language of love and warmth.',
	'As the sun dips low, let your meal be a soft song that ends the day in harmony.',
	'In the embrace of twilight, let your dinner be a feast fit for the setting sun.',
	'The night sky unfurls its canvas—let your dinner paint the perfect end to your day.',
	'As the stars twinkle, let your meal be a constellation of flavors, guiding you to satisfaction.',
	'Let the nightfall carry you to a dinner that soothes, satisfies, and whispers goodnight.',
	'In the quiet moments of dusk, let each bite be a reminder of the peace the night can bring.',
	'The evening wraps you in its arms—let dinner be the warmth that completes its embrace.',
	'As the world quiets down, let your meal speak volumes of comfort and serenity.',
];

const getGreeting = (hours: number) => {
	assert(bounded(hours, 0, 24));
	if (hours < 6) {
		return graveyard[Math.floor(Math.random() * graveyard.length)];
	}
	if (hours < 12) {
		return morning[Math.floor(Math.random() * morning.length)];
	}
	if (hours < 17) {
		return afternoon[Math.floor(Math.random() * afternoon.length)];
	}
	if (hours < 24) {
		return evening[Math.floor(Math.random() * evening.length)];
	}

	return 'Welcome to CMUEats!';
};

export default getGreeting;
