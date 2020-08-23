async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const CreateLandingInfo = async (
  parent,
  { cta, businessId, description, displayName, imagesUrl },
  ctx,
) => {
  let landingInfoData = {
    displayName,
    description,
  }
  if (cta) {
    landingInfoData['cta'] = cta
  }
  // if (website) {
  //   landingInfoData['website'] = website
  // }
  // if (instagramUrl) {
  //   landingInfoData['instagramUrl'] = instagramUrl
  // }
  // if (facebookUrl) {
  //   landingInfoData['facebookUrl'] = facebookUrl
  // }
  landingInfoData['business'] = { connect: { id: businessId } }
  const landingInfo = await ctx.prisma.landingInfo.create({
    data: landingInfoData,
  })

  await asyncForEach(imagesUrl, async (id) =>
    ctx.prisma.businessImage.create({
      data: {
        url: id,
        landingInfo: { connect: { id: landingInfo.id } },
      },
    }),
  )

  return landingInfo
}

const UpdateLandingInfo = (
  parent,
  { id, cta, description, displayName },
  ctx,
) => {
  const landingInfo = ctx.prisma.landingInfo.update({
    where: { id: id },
    data: {
      cta,
      description,
      displayName,
    },
  })
  return landingInfo
}

const AddImagesLandingInfo = async (
  parent,
  { landingInfoId, imagesUrl },
  ctx,
) => {
  await asyncForEach(imagesUrl, (id) =>
    ctx.prisma.businessImage.create({
      data: {
        url: id,
        landingInfo: { connect: { id: landingInfoId } },
      },
    }),
  )

  return ctx.prisma.landingInfo.findOne({ where: { id: landingInfoId } })
}

const DeleteLandingInfo = (parent, { id }, ctx) => {
  const landingInfo = ctx.prisma.landingInfo.delete({
    where: { id: id },
  })
  return landingInfo
}

module.exports = {
  CreateLandingInfo,
  UpdateLandingInfo,
  DeleteLandingInfo,
  AddImagesLandingInfo,
}
