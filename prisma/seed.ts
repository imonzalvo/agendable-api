import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
//   const allBusiness = await prisma.business.findMany()
//   console.log('all business', allBusiness)
//   const updateBusinessPromises = allBusiness.map((business) => {
//     return prisma.configuration.create({
//       data: {
//         enableEmailsNotifications: true,
//         scheduleMinutesSeparation: 30,
//         business: { connect: { id: business.id } },
//       },
//     })
//   })

//   const updated = await Promise.all(updateBusinessPromises)
//   console.log('count', updated)

//   const updatedBusiness = await prisma.business.findMany()
//   console.log('updated business', updatedBusiness)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
