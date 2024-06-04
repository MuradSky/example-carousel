interface TProfile {
  children?: ReactElement;
  informer?: ReactElement;
}

interface TData {
  data?: any
  prizes?:any
}

interface TButton {
  variant?: string;
  mx?: string | number;
  size?: string | number;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  icon?: ReactElement;
  target?: string;
  href?: string;
}

interface TNav {
  id: string;
  title: string;
  type: string;
  fileDoc: string;
  pathName: string;
}

interface TBool {
  isActive?: boolean;
  isAuth?: boolean;

}

interface TProtectedRoute {
    children: ReactElement;
}

interface TError {
  isError?: boolean;
  errorMsg?: string;
  isFocus?: string;
}

interface TTextField {
  type?: string;
  name: string;
  placeholder?: string;
  onChange?: React.ChangeEvent;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  setFile?: any
	hideMark?: boolean
	className?: string
}

interface TCheckbox {
  name: TTextField.name;
  onChange?: TTextField.onChange;
  disabled?: TTextField.disabled;
  value?: any;
  children?: TChildren.children;
  styled?: CSS
}

interface TFieldLabel {
  name: string;
  placeholder?: string;
  textFiled: ReactElement;
  icons?: ReactElement;
  disabled?: boolean;
}

interface TFields {
  conditions_and_rules: any;
  personal_data: any;
  type?: string;
  id?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  phone?: string;
  email?: string;
  birthday?: date | string
}

interface TFieldsComponent {
  text?: ReactElement;
  email?: ReactElement;
  phone?: ReactElement;
  password?: ReactElement;
  date?: ReactElement;
  textarea?: ReactElement;
  file?: ReactElement
}

interface TModal {
  isOpen: boolean;
  children?: TChildren.children;
  onClosed?: any;
  Component?: ReactComponent;
  isAuth?: boolean;
  type?: string
  className?: string
  shouldCloseOnOverlayClick?: boolean
	offRequestClose?: boolean
}

interface ModalProps {
	isOpen: boolean,
	onClose: ()=> void
}

interface TModalForms {
  modalType?: string;
  changeViewType?: any;
  onClose: () => void;
  email?: string;
  setEmail?: SetStateAction<string>;
  modalState?: string | null
}

interface TChecklist {
  data?: any;
  isExpanded?: boolean;
}

interface THeroGifts {
  id: number;
  img_path: string;
  level: string;
  title: string;
}

interface THeroData {
  id: number;
  character_name: string;
  title: string;
  sub_title: string;
  character_image: string;
  gifts: THeroGifts[];
}

interface TWeek {
  id: number;
  is_current: boolean | null;
  is_finished: boolean | null;
  period: string;
  start_at: string;
  finish_at: string;
  winners: object[] | null;
  drew_at: string;
}

interface TPartnerData {
  name: string;
  isElected: boolean;
  content: string;
  link: string;
  image: string;
}

interface TSlider {
  className?: string;
  style?: any;
  onClick?: any;
  arrow: ReactElement;
}

interface TCharacterType {
  [key] : string
}
