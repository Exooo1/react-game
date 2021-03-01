
const questions = {
    "18+": ['What do you do in the shower in the morning?', 'Are you using obscene words?', 'Do you like alcoholic drinks?', 'With whom could you go to bed from those present?',
        , 'Tell us about your first sexual experience.', 'When was the first time you played with yourself?', 'Do you like your gender?', 'How many partners have you had in your entire life?',
        'How many partners were there at the same time?', 'What"s your most embarrassing trick in bed?', 'What is the biggest age difference between you and a sexual partner?'],

    Provacation: ['Who annoys you the most in our company?', 'How much do you weigh?', 'Did you do anything terrible for the money?', 'can you betray a person?'],

    Party: ["What's the dirtiest thing your partner has ever asked you to do?", "If you could get rid of one homework, what would it be?", "What is your favorite food?", "Your longest and best relationship?",
        "How far will you go with someone in this room?", "What's the dirtiest dream you've ever had? Describe in detail!", "Have you ever spent your parents money on alcohol?"],
    carryOut: ['Stand like a flamingo for the next four rounds.', "Make the board until it's your turn.", 'Put the soap on your tongue.', 'Take off a piece of clothing.', "Make the President's Inauguration Speech.",
        'Попробуйте лизнуть свой локоть.', 'Make a fish face', "Slap the person to your right, don't hold back."]
}

const initial: Object = {
    setTheme: [
        { id: 1, text: '18+', src: 'https://avatarko.ru/img/kartinka/33/guby_34320.jpg' },
        { id: 2, text: 'Provacation', src: 'https://u-stena.ru/upload/iblock/bf0/bf0292e61d6a0dd034908750bea53d56.jpg' },
        { id: 3, text: 'Party', src: 'http://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/421/2019/08/23183550/dance-clipart-colorful-16.jpg  ' }
    ],

    oneStep: false,

    selectedTheme: '',

    getTheme: null,

    question: null

}

const ThemeReducer = (state = initial, action: any) => {
    switch (action.type) {
        case 'ADD_THEME':
            return {
                ...state,
                oneStep: true,
                getTheme: action.text,
                selectedTheme: action.src,
                question: questions
            }
        default: return state
    }
}

export default ThemeReducer;