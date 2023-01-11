import tradicionalImg from '../../../../../assets/coffee-images/expresso.png'
import americanoImg from '../../../../../assets/coffee-images/americano.png'
import cremosoImg from '../../../../../assets/coffee-images/expresso_cremoso.png'
import geladoImg from '../../../../../assets/coffee-images/cafe_gelado.png'
import cafeComLeiteImg from '../../../../../assets/coffee-images/cafe_com_leite.png'
import latteImg from '../../../../../assets/coffee-images/latte.png'
import capuccinoImg from '../../../../../assets/coffee-images/capuccino.png'
import macchiatoImg from '../../../../../assets/coffee-images/macchiato.png'
import mocaccinoImg from '../../../../../assets/coffee-images/mocaccino.png'
import chocolateImg from '../../../../../assets/coffee-images/chocolate_quente.png'
import cubanoImg from '../../../../../assets/coffee-images/cubano.png'
import havaianoImg from '../../../../../assets/coffee-images/havaiano.png'
import arabeImg from '../../../../../assets/coffee-images/arabe.png'
import irlandesImg from '../../../../../assets/coffee-images/irlandes.png'

export const coffees = [
    {
        id: 1,
        image: tradicionalImg,
        type: ['Tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
    },
    {
        id: 2,
        image: americanoImg,
        type: ['Tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90
    },
    {
        id: 3,
        image: cremosoImg,
        type: ['Tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90
    },
    {
        id: 4,
        image: geladoImg,
        type: ['Tradicional', 'Gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90
    },
    {
        id: 5,
        image: cafeComLeiteImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90
    },
    {
        id: 6,
        image: latteImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90
    },
    {
        id: 7,
        image: capuccinoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Cappuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90
    },
    {
        id: 8,
        image: macchiatoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Machiatto',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90
    },
    {
        id: 9,
        image: mocaccinoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90
    },
    {
        id: 10,
        image: chocolateImg,
        type: ['Especial', 'Com Leite'],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90
    },
    {
        id: 11,
        image: cubanoImg,
        type: ['Especial', ' Alcoólico', 'Gelado'],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90
    },
    {
        id: 12,
        image: havaianoImg,
        type: ['Especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90
    },
    {
        id: 13,
        image: arabeImg,
        type: ['Especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café arabe e especiarias',
        price: 9.90
    },
    {
        id: 14,
        image: irlandesImg,
        type: ['Especial', 'Alcoólico'],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90
    }

]