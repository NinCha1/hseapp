const DATA = [
    {
        id: 'la',
        subjName: 'Linear Algebra',
        courseDesc: 'The course introduces students to the elements of linear algebra and analytic geometry, provides the foundations for understanding some of the main concepts of modern mathematics. There is a strong emphasis in this course on complete proofs of almost all results. \n\nWe will approach the subject from both a practical point of view (learning methods and acquiring computational skills relevant for problem solving) and a theoretical point of view (learning a more abstract and theoretical approach that focuses on achieving a deep understanding of the different abstract concepts). \n\nTopics covered include: matrix algebra, systems of linear equations, permutations, determinants, complex numbers, fields, abstract vector spaces, bilinear and quadratic forms, Euclidean spaces, some elements of analytic geometry, linear operators. It took mathematicians at least two hundred years to comprehend these objects. We plan to accomplish this in one year.',
        gradeFormula: '0.25*(0.3*Exam1 + 0.7*(0.3125*Oral1 + 0.25*W1 + 0.25*Q1 + 0.1875*H1)) +  0.75*(0.3*Exam2 + 0.7*(0.3125*Oral2 + 0.25*W2 + 0.25*Q2 + 0.1875*H2)))',
        teachers: [
            {
                name: 'Andrey Mazhuga',
                role: 'Lecturer / Seminarist',
                group: '191',

            },
            {
                name: 'Galina Kaleeva',
                role: 'Seminarist',
                group: '192',

            },
            {
                name: 'Nikita Medved',
                role: 'Seminarist',
                group: '193',

            },
            
        ]
    },
    {
        id: 'ts',
        subjName: 'Time Series',
        courseDesc: 'N/A',
        gradeFormula: '0.25*(0.3*Exam1 + 0.7*(0.3125*Oral1 + 0.25*W1 + 0.25*Q1 + 0.1875*H1)) +  0.75*(0.3*Exam2 + 0.7*(0.3125*Oral2 + 0.25*W2 + 0.25*Q2 + 0.1875*H2)))',
        teachers: [
            {
                name: 'Andrey Mazhuga',
                role: 'Lecturer / Seminarist',
                group: '191',

            },
            {
                name: 'Galina Kaleeva',
                role: 'Seminarist',
                group: '192',

            },
            {
                name: 'Nikita Medved',
                role: 'Seminarist',
                group: '193',

            },
        ]
    },

    {
        id: 'ecm',
        subjName: 'Econometrics',
        courseDesc: 'N/A',
        gradeFormula: 'N/A',
        teachers: [
            {
                name: 'Zamkov Oleg',
                role: 'Lecturer',
                group: '191',

            },
            {
                name: 'Galina Kaleeva',
                role: 'Seminarist',
                group: '192',

            },
            {
                name: 'Nikita Medved',
                role: 'Seminarist',
                group: '193',

            },  
        ]
    }
    
]

export default {DATA}