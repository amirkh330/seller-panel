'use client'
import { Providers } from '../Redux/Providers'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { chakra } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
  BsCartPlusFill,
  BsFillClipboard2DataFill,
  BsFillClipboardCheckFill,
  BsFillFileDiffFill,
  BsFillFilePersonFill,
} from 'react-icons/bs'
import { FaDollarSign, FaUserPlus } from 'react-icons/fa'
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi'
import { MdBorderColor, MdDashboardCustomize } from 'react-icons/md'

interface LinkItemProps {
  name: string
  icon: any
  link: string
  disabled?: boolean
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'داشبورد', icon: MdDashboardCustomize, link: '/' },
  { name: 'ثبت سفارش', icon: MdBorderColor, link: '/add-order' },
  { name: 'مالی', icon: FaDollarSign, link: '/finance' },
  { name: 'لیست سفارشات', icon: BsFillClipboard2DataFill, link: '/order' },
  // {
  //   name: 'پیش نویس ها',
  //   icon: BsFillFileDiffFill,
  //   link: '/drafts',
  //   disabled: true,
  // },
  { name: 'افزودن مشتری', icon: FaUserPlus, link: '/add-customer' },
  { name: 'لیست محصولات', icon: BsCartPlusFill, link: '/products' },
  {
    name: 'برنامه ریزی',
    icon: BsFillClipboardCheckFill,
    link: '/todo',
  },
  // {
  //   name: 'اطلاعات فردی',
  //   icon: BsFillFilePersonFill,
  //   link: '/user-info',
  //   disabled: true,
  // },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const pathname = usePathname()
  const isActive = (link: string) =>
    pathname === link && { bg: 'blue.700', color: 'white' }
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Flex
          align='center'
          as={Link}
          href={link.link}
          p='4'
          mx='4'
          my='2'
          role='group'
          borderRadius='lg'
          cursor={link?.disabled ? 'no-drop' : 'pointer'}
          onClick={() => onClose()}
          {...isActive(link.link)}
          _hover={{
            bg: 'blue.700',
            color: 'white',
          }}
        >
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={link.icon}
          />
          <Text display='inline' mx='2'>
            {link.name}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height='60px'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size='lg'
          variant='ghost'
          aria-label='open menu'
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm'>محمد حسینی</Text>
                  <Text fontSize='xs' color='gray.600'>
                    کارشناس فروش
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>اطلاعات فردی</MenuItem>
              <MenuDivider />
              <MenuItem>خروج</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <html lang='en'>
      <chakra.body h='100dvh' bg='#fafbfc' dir='rtl' fontFamily='IRANSansXV'>
        <Providers>
          <Box minH='100dvh' bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
              onClose={() => onClose}
              display={{ base: 'none', md: 'block' }}
            />
            <Drawer
              autoFocus={false}
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size='full'
            >
              <DrawerContent>
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box mr={{ base: 0, md: 60 }} p={{ base: 2, md: 4 }} h='100dvh'>
              {children}
            </Box>
          </Box>
        </Providers>
      </chakra.body>
    </html>
  )
}
