const variable = {
  telegramId: '893744534',
  secret: null,
  roles: [ { _id: '63ea17a96081f46ffd11ae54', name: 'Admin' } ],
  permissions: [],
  serviceIds: [],
  status: true,
  isSystem: false,
  isEnableAuth2Fa: false,
  lastLoginAt: 1706848305470,
  _id: '6578242390b1520f51a51a42',
  username: 'anh.huy.bo',
}

function transformerData(data, fields = []) {
  if (Array.isArray(data)) {
    return data.map((el) => {
      return transformerData(el, fields);
    });
  }

  // console.log('fields: ', fields);
  // data['id'] = data._id
  const nData = {...data};
  nData.id = nData._id;

  // delete nData._id;

  Object.keys(nData).forEach(key => {
    if (Array.isArray(nData[key])) {
      return transformerData(nData[key]);
    }

    if (!fields.includes(key)) {
      delete nData[key]
    }
  });
  console.log('nData: ', nData);
  return nData;
}

console.log(transformerData(variable, [
    'id',
    'description',
    'serviceIds',
    'isSystem',
    'name',
    'username',
    'createdBy.username',
    'roles'
]))