export { dataFetch } from './dataFetch'
export * from "./weekEvents"
export * from "./windowSize";
export * from "./renderTimer";
export * from "./polyfill";

export const enumerationOfName = (fieldsData: TFields[], SET_INIT_VALUES: any) => {
  const fields = fieldsData.reduce((stat: any, field: any) => {
    const fieldName = field.name;
    stat[fieldName] = SET_INIT_VALUES[field.name] || field.value
    return stat
  }, {})
  return SET_INIT_VALUES.length === 0 ? fieldsData : fields
}

export const changeFieldsByIndex = (state: TFields[], DISABLED_FIELDS: string[]) => {
  const result = state.map((field: any,) => {
    const clone = {...field}
    if (DISABLED_FIELDS.includes(field.name)) clone.disabled = true
    else clone.disabled = false
    return clone
  }, [])
  return DISABLED_FIELDS.length === 0 ?  state : result
}

export const extractFields = (exacts: string[], fieldsData: TFields[]) => {
  const exactData = fieldsData?.filter(( item: TFields ) =>exacts.includes(item.name))
  return exactData
}

export const imageLoader = ( src: string ) => {
  try {
    const imgage = require(`assets/img/${src}`)
    return imgage
  } catch (e) {
    console.log(e)
    return ""
  }
}

export const emailViewMask = (str: string) => {
  return str.replace(/(.{2})(.*)(?=@)/, (_, gp2, gp3) => {
    Array.from(gp3).forEach(()=> gp2+="*")
    return gp2;
  })
}

export const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
export const elementPosition = (obj: any) => {
  let currentTop = 0;
  if (obj.offsetParent){
    do {
      currentTop += obj.offsetTop
    } while ((obj = obj.offsetParent));

  }
  return currentTop;
}

export const formatDateWithTime = (dateString: Date) => {
	return new Date(dateString).toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
};
