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
        image: tradicionalImg,
        type: ['Tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
        image: americanoImg,
        type: ['Tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
        image: cremosoImg,
        type: ['Tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
    },
    {
        image: geladoImg,
        type: ['Tradicional', 'Gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo'
    },
    {
        image: cafeComLeiteImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado'
    },
    {
        image: latteImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
    },
    {
        image: capuccinoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Cappuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma'
    },
    {
        image: macchiatoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Machiatto',
        description: 'Café expresso misturado com um pouco de leite quente e espuma'
    },
    {
        image: mocaccinoImg,
        type: ['Tradicional', 'Com Leite'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma'
    },
    {
        image: chocolateImg,
        type: ['Especial', 'Com Leite'],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café'
    },
    {
        image: cubanoImg,
        type: ['Especial', ' Alcoólico', 'Gelado'],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
    },
    {
        image: havaianoImg,
        type: ['Especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco'
    },
    {
        image: arabeImg,
        type: ['Especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café arabe e especiarias'
    },
    {
        image: irlandesImg,
        type: ['Especial', 'Alcoólico'],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
    }

]