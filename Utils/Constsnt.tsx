import { Button } from '@chakra-ui/react'

export const customers = [
  { label: 'آقای احمدی', value: '1' },
  { label: 'آقای رضایی', value: '2' },
  { label: 'آقای محسنی', value: '3' },
  { label: 'آقای ناظری', value: '4' },
  { label: 'آقای جابری', value: '5' },
  { label: 'آقای کاظمی', value: '6' },
]

export const products = [
  {
    title: 'نوشابه کوکاکولا تک نفره',
    price: 8000,
    discount: [5, 10],
    unit: 'box',
    id: '7',
    Inventory: 500,
  },
  {
    title: 'نوشابه کوکاکولا خانواده',
    price: 20000,
    discount: [10],
    unit: 'box',
    id: '8',
    Inventory: 200,
  },

  {
    title: 'نوشابه پپسی خانواده',
    price: 18000,
    discount: [10],
    unit: 'box',
    id: '9',
    Inventory: 200,
  },
  {
    title: 'نوشابه پپسی  تک نفره',
    price: 20000,
    unit: 'box',
    id: '10',
    Inventory: 0,
  },
  {
    title: 'چیپس ساده بزرگ',
    price: 17000,
    unit: 'box',
    id: '11',
    Inventory: 0,
  },
  {
    title: 'چیپس ساده کوچک',
    price: 9000,
    unit: 'box',
    discount: [5],
    id: '12',
    Inventory: 20,
  },
  {
    title: 'چایی گلستان فله',
    price: 50000,
    unit: 'kg',
    discount: [8],
    id: '13',
    Inventory: 0,
  },
  {
    title: 'چایی ارل گری فله',
    price: 98000,
    unit: 'kg',
    Inventory: 100,
    discount: [2, 10],
    id: '14',
  },
  {
    title: 'برنج طارم',
    price: 100000,
    unit: 'kg',
    Inventory: 500,
    discount: [{ 1: 2 }, { 100: 5 }, { 500: 10 }],
    logic: true,
    id: '15',
  },
]

export const data = [
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='blue'>موفقیت آمیز</Button>,
  ],
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='green'>در حال بررسی</Button>,
  ],
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='blue'>موفقیت آمیز</Button>,
  ],
]

export const column = ['نام مشتری', 'تاریخ', 'مبلغ', 'وضعیت']

export const count = Array(499)
  .fill('')
  .map((i, _index) => _index++)
