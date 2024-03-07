import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    paddingTop: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0A7E8B',
    textAlign: 'center',
    marginVertical: 50,
  },
  heroSection: {
    backgroundColor: '#087E8B',
    marginBottom: 15,
    paddingHorizontal: 6,
    paddingVertical: 6,
    display: 'flex',
  },
  sermonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  imageOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 3,
  },
  dataDate: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
    paddingTop: 7,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 25,
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: 8,
    paddingBottom: 8,
  },
  videoArraySection: {
    display: 'flex',
  },
  videoColumn: {
    width: '50%',
    paddingHorizontal: 6,
  },
  videoRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  videoImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
  },
  videoOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  videoDate: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    paddingTop: 7,
  },
  videoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  videoTextContainer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    padding: 10,
  },
});
export {styles};
