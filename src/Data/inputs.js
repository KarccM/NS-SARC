import useTranslation from '../hooks/useTranslate';

export const genderOptions = ['male', 'female'];
export const martialOptions = ['single', 'married'];
export const shouldersOptions = ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'];
export const shoesOptions = [
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
];
export const waistOptions = ['38', '40', '42', '44', '46', '48', '50'];
export const certigicateOptions = [
  'low',
  'middle',
  'high',
  'bacalorious',
  'master',
  'doc',
];
export const bool = ['yes', 'no'];

export const login = [
  { name: 'username', type: 'text', value: '', label: 'Username' },
  { name: 'password', type: 'password', value: '', label: 'Password' },
];

export const register = {
  Personal: [
    { name: 'fst', type: 'text', value: '', label: 'الاسم الاول' },
    { name: 'mdl', type: 'text', value: '', label: 'اسم الاب' },
    { name: 'lst', type: 'text', value: '', label: 'الاسم الاخير' },
    { name: 'mobile', type: 'text', value: '', label: 'رقم الجوال' },
    { name: 'phone', type: 'text', value: '', label: 'رقم الهاتف' },
    { name: 'certde', type: 'text', value: '', label: 'شرح عن الشهادة' },
    { name: 'engnm', type: 'text', value: '', label: 'الاسم بالانجيليزي' },
    { name: 'bplace', type: 'text', value: '', label: 'مكان الولادة' },

    { name: 'bdate', type: 'date', value: '', label: 'رقم الهاتف' },

    {
      name: 'gender',
      type: 'select',
      value: '',
      label: 'الجنس',
      options: genderOptions,
    },
    {
      name: 'marsoc',
      type: 'select',
      value: '',
      label: 'الحالة الأجتماعية',
      options: martialOptions,
    },
    {
      name: 'certTp',
      type: 'select',
      value: '',
      label: 'نوع الشهادة',
      options: certigicateOptions,
    },
    {
      name: 'shoes',
      type: 'select',
      value: '',
      label: 'مقاس القدم',
      options: shoesOptions,
    },
    {
      name: 'waist',
      type: 'select',
      value: '',
      label: 'مقاس الخصر',
      options: waistOptions,
    },
    {
      name: 'sholdr',
      type: 'select',
      value: '',
      label: 'مقاس الكتاف',
      options: shouldersOptions,
    },
  ],

  Work: [
    { name: 'mobile', type: 'text', value: '', label: 'رقم هلال شخصي ان وجد' },
    { name: 'shifts', type: 'text', value: '', label: 'عدد المناوبات' },
    { name: 'other', type: 'text', value: '', label: 'اخر' },

    { name: 'volunteer_date', type: 'date', value: '', label: 'تاريخ التطوع' },
    {
      name: 'start_volunteer_date',
      type: 'date',
      value: '',
      label: 'تاريخ المباشرة بالتطويع',
    },
    { name: 'hire_date', type: 'date', value: '', label: 'تاريخ التوظيف' },

    {
      name: 'introduction',
      type: 'select',
      value: '',
      label: 'ورشة تعريفية',
      options: bool,
    },
    {
      name: 'distribution',
      type: 'select',
      value: '',
      label: 'ورشة توزيع',
      options: bool,
    },
    {
      name: 'registration',
      type: 'select',
      value: '',
      label: 'ورشة تسجيل',
      options: bool,
    },
    {
      name: 'Catastrophes',
      type: 'select',
      value: '',
      label: 'ورشة كوارث',
      options: bool,
    },
    {
      name: 'Catastrophes_advence',
      type: 'select',
      value: '',
      label: 'ورشة كوارث متقدم',
      options: bool,
    },
    {
      name: 'water_build',
      type: 'select',
      value: '',
      label: 'ورشة مياه و اعمار',
      options: bool,
    },
    {
      name: 'PST',
      type: 'select',
      value: '',
      label: 'ورشة دعم نفسي',
      options: bool,
    },
    {
      name: 'ambulance',
      type: 'select',
      value: '',
      label: 'ورشة اسعاف',
      options: bool,
    },
    {
      name: 'asphere',
      type: 'select',
      value: '',
      label: 'ورشة اسفير',
      options: bool,
    },
    {
      name: 'wfp',
      type: 'select',
      value: '',
      label: 'ورشة اعادة استهداف',
      options: bool,
    },
    {
      name: 'cash',
      type: 'select',
      value: '',
      label: 'ورشة كاش',
      options: bool,
    },
    {
      name: 'livilhood',
      type: 'select',
      value: '',
      label: 'ورشة دعم مجتمعي',
      options: bool,
    },
    {
      name: 'financial',
      type: 'select',
      value: '',
      label: 'موافقة مالية',
      options: bool,
    },
    {
      name: 'res_add',
      type: 'select',
      value: '',
      label: 'النقطة',
      options: bool,
    },
  ],

  User: [
    { name: 'usr', type: 'text', value: '', label: 'اسم المستخدم' },
    { name: 'password', type: 'password', value: '', label: 'كلمة السر' },
  ],
};
