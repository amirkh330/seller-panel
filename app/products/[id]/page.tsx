'use client'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Button, Card, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

const page = () => {
  return (
    <>
      <Flex align='center' justify='space-between'>
        <Text fontSize='lg' fontWeight='semibold'>
          لب تاب
        </Text>
        <Button
          variant='outline'
          rightIcon={<ChevronLeftIcon />}
          onClick={() => window.history.back()}
        >
          برگشت
        </Button>
      </Flex>
      <Flex gap='4' mt='2' flexDir={{ base: 'column', md: 'row' }}>
        <Card w={{ base: 'full', md: '50%' }}>
          <img src='https://dkstatics-public.digikala.com/digikala-products/86b92ffbd6527317df7a7fe48838bd080411a93e_1658648213.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90' />
        </Card>

        <Card w={{ base: 'full', md: '50%' }} p='4'>
          <Text fontWeight='bold'>Mac Book</Text>
          <Text lineHeight='10'>
            لپ‌تاپ‌های سری مک‌بوک شرکت اپل از طرفداران بسیاری برخوردار هستند.
            این لپ‌تاپ‌ها توان پردازشی بسیار بالایی دارند که بر محبوبیت این سری
            می‌افزاید. یکی از مدل‌های این سری قدرتمند، MacBook MKGP3 M1 Pro است.
            اپل برای طراحی این مدل، رویه همیشگی خود را حفظ کرد و در کنار ظرافت و
            زیبایی، امکانات سخت‌افزاری مطلوبی را تعبیه کرده است. این مک‌بوک به
            پردازنده قدرتمند M1 Pro مجهز شده که با گرافیک 14-core می‌تواند از پس
            اجرای برنامه‌های سنگین برآید. اپل برای این مدل از یک نمایشگر 14.2
            اینچی استفاده کرده است. پنل این نمایشگر از نوع Liquid Retina XDR
            display و رزولوشن فوق‌العاده 3024x1964 پیکسلی را به نمایش می‌گذارد.
            در اصل این نمایشگر با نمایش 254 پیکسل در هر اینچ جزئیات بسیار دقیقی
            از هر تصویر را به نمایش می‌گذارد.MacBook MKGP3 M1 Pro دارای 3 عدد
            پورت USB-C با قابلیت پشتیبانی از4 ThunderBolt است.{' '}
          </Text>
        </Card>
      </Flex>
    </>
  )
}

export default page
