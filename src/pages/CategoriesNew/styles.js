import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_category: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container_option: {
    width: 250,
    marginRight: 16,
  },
  container_body: {
    width: '100%',
  },
  section_option_brand: {
    width: 250,
    backgroundColor: colors.white,
    border: `1px solid ${colors.orange}`,
    borderRadius: 16,
  },
  header_option: {
    padding: '12px 24px',
    backgroundColor: colors.orange,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  item_list_option: {
    paddingBottom: 4,
    borderBottom: '1px solid #adb5bd',
  },
  item_list_option_product: {},
  img_item_option_product: {
    width: 80,
    height: 80,
    marginRight: 8,
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    margin: '8px 0px',
  },
  bx_star_rate: {
    display: 'flex',
    cursor: 'pointer',
    marginTop: 4,
    marginBottom: 4,
  },
  icon_star: {
    color: colors.yellow,
    marginRight: 1,
  },
  item_banner_header: {
    padding: 24,
    border: `1px solid ${colors.lightGray}`,
    marginBottom: 16,
  },
  box_img_banner: {
    marginBottom: 16,
    backgroundColor: colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_banner: {
    width: '100%',
    height: '100%',
  },
  bx_select: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section_product: {
    display: 'grid !important',
    gridTemplateColumns: 'auto auto auto auto ',
    gridGap: 20,
  },
  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 100,
    alignItems: 'center',
  },
  checkbox_filter: {
    '& input': {
      opacity: 1,
    },
  },
  accordion_item: {
    '&.Mui-expanded': {
      minHeight: '48px !important',
    },
  },
  accordion_item_address: {
    '&.Mui-expanded': {
      minHeight: '48px !important',
      borderBottom: `1px solid ${colors.darkGray2}`,
    },
  },
  accordion_container: {
    '&.Mui-expanded': {
      margin: '0px !important',
    },
    '&:before': {
      content: 'none !important',
    },
  },
}));
