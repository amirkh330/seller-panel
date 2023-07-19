import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'

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

export const tableData = [
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='blue'>موفقیت آمیز</Button>,
    <Link href='/order/123'>
      <FaEye />
    </Link>,
  ],
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='green'>در حال بررسی</Button>,
    <Link href='/order/123'>
      <FaEye />
    </Link>,
  ],
  [
    'احمدی',
    '۳ مرداد',
    '۲/۰۰۰/۰۰۰',
    <Button colorScheme='blue'>موفقیت آمیز</Button>,
    <Link href='/order/123'>
      <FaEye />
    </Link>,
  ],
]

export const column = ['نام مشتری', 'تاریخ', 'مبلغ', 'وضعیت']
export const factorColumn = ['نام محصول', 'فی', 'تعداد', 'تخفیف', 'قیمت کل']
export const FactorData = [
  ['نوشابه کوکاکولا خانواده', '20/000 تومان', '10', 10, '180/000 تومان'],
  ['نوشابه کوکاکولا کوچک', '20/000 تومان', '10', 10, '180/000 تومان'],
  ['نوشابه پپسی خانواده', '20/000 تومان', '10', 10, '180/000 تومان'],
  ['نوشابه پپسی خانواده', '20/000 تومان', '10', 10, '180/000 تومان'],
]

export const ProductListColumn = [
  'نام محصول',
  'فی',
  'موجودی',
  'تخفیف',
  'مشاهده ',
]
export const ProductListData = [
  {
    id: 1,
    title: 'نوشابه کوکاکولا خانواده',
    price: '20/000 تومان',
    isExist: true,
    discount: '5 %',
    view: (
      <Link href='/products/123'>
        <FaEye />
      </Link>
    ),
  },
  {
    id: 2,
    title: 'نوشابه کوکاکولا کوچک',
    price: '20/000 تومان',
    isExist: true,
    discount: '8 %',
    view: (
      <Link href='/products/123'>
        <FaEye />
      </Link>
    ),
  },
  {
    id: 3,
    title: 'نوشابه پپسی خانواده',
    price: '20/000 تومان',
    isExist: false,
    discount: 0,
    view: (
      <Link href='/products/123'>
        <FaEye />
      </Link>
    ),
  },
  {
    id: 4,
    title: 'نوشابه پپسی خانواده',
    price: '20/000 تومان',
    isExist: true,
    discount: ' 10 %',
    view: (
      <Link href='/products/123'>
        <FaEye />
      </Link>
    ),
  },
]

export const count = Array(499)
  .fill('')
  .map((i, _index) => _index++)
