const messagePartOne = [
    "This month you can expect to feel a renewed sense of energy and motivation as the sun transits through your first house of self.",
    "This month you will be focusing on your finances and security.",
    "This month you will be focusing on your relationships and partnerships.",
    "This month you will be focusing on your home and family.",
    "This month you will be focusing on your daily routine and health.",
    "This month you will be focusing on your personal growth and self-expression.",
    "This month you will be focusing on your finances and material possessions.",
    "This month you will be focusing on your communication and learning.",
    "This month you will be focusing on your personal growth and spiritual journey.",
    "This month you will be focusing on your career and public image.",
    "This month you will be focusing on your relationships and partnerships.",
    "This month you will be focusing on your finances and material possessions."
];
const messagePartTwo = [
    "It's a great time to focus on personal goals, and to take action on projects that have been sitting on the back burner.",
    "The sun is transiting through your second house of money and values, and you may be feeling more practical and realistic in your approach to earning and spending.",
    "The sun is transiting through your seventh house of partnership, and you may be feeling more sensitive and empathetic towards others.",
    "The sun is transiting through your fourth house of home and family, and you may be feeling more emotional and protective of your loved ones.",
    "The sun is transiting through your sixth house of health and work, and you may be feeling more motivated to take care of yourself and improve your habits. You might also be paying more attention to your job and the daily tasks that need to be done.",
    "The sun is transiting through your fifth house of self-expression and creativity, and you may be feeling more confident in expressing yourself and pursuing your passions.",
    "The sun is transiting through your second house of money and values, and you may be feeling more practical and realistic in your approach to earning and spending.",
    "The sun is transiting through your third house of communication, and you may be feeling more curious and open-minded.",
    "The sun is transiting through your ninth house of spirituality, and you may be feeling more open-minded and curious about the world around you.",
    "The sun is transiting through your tenth house of career and reputation, and you may be feeling more ambitious and driven to succeed.",
    "The sun is transiting through your seventh house of partnership, and you may be feeling more sensitive and empathetic towards others.",
    "The sun is transiting through your second house of money and values, and you may be feeling more practical and realistic in your approach to earning and spending."
];
const messagePartThree = [
    "Mars, your ruling planet, is in a harmonious aspect with Jupiter, which is expanding your horizons and giving you the courage to take risks.",
    "Venus, your ruling planet, is in a harmonious aspect with Saturn, which is helping you to establish a solid financial foundation.",
    "Mercury, your ruling planet, is in a harmonious aspect with Neptune, which is helping you to communicate your feelings and connect with others on a deeper level.",
    "The Moon, your ruling planet, is in a harmonious aspect with Pluto, which is helping you to transform and heal any issues related to your past or family history.",
    "Jupiter, your ruling planet, is in a harmonious aspect with Saturn, which is bringing a sense of balance and stability to your daily life.",
    "Mercury, your ruling planet, is in a harmonious aspect with Mars, which is bringing a sense of energy and motivation to your personal growth.",
    "Venus, your ruling planet, is in a harmonious aspect with Pluto, which is helping you to transform and improve your financial situation.",
    "Pluto, your ruling planet, is in a harmonious aspect with Mercury, which is bringing a deeper understanding and insight to your thoughts and communication. This is a great time to learn new skills or to connect with others through networking and sharing ideas.",
    "Jupiter, your ruling planet, is in a harmonious aspect with Neptune, which is bringing a sense of inspiration and wonder to your spiritual journey.",
    "Saturn, your ruling planet, is in a harmonious aspect with Pluto, which is bringing a sense of power and transformation to your career path.",
    "Uranus, your ruling planet, is in a harmonious aspect with Mars, which is bringing a sense of excitement and energy to your relationships.",
    "Neptune, your ruling planet, is in a harmonious aspect with Jupiter, which is bringing a sense of abundance and prosperity to your financial situation."
];

const newPrediction = () => {
    const predictionPartOne = Math.floor(Math.random() * (messagePartOne.length));
    const predictionPartTwo = Math.floor(Math.random() * (messagePartTwo.length));
    const predictionPartThree = Math.floor(Math.random() * (messagePartThree.length));

    document.getElementById("predictionDisplay").innerHTML = `Your todays prediction: ${messagePartOne[predictionPartOne]} ${messagePartTwo[predictionPartTwo]} ${messagePartThree[predictionPartThree]}`;
}