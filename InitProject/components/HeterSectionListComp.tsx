import {SectionList, StyleSheet, Text} from 'react-native';

type DataItem = {
  id: string;
  text: string;
}

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
    renderItem: ({ item }: {item: DataItem}) => {
      return <Text style={styles.row}>{item.text}</Text>
    },
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
    renderItem: ({ item }: {item: DataItem}) => <Text style={styles.rowDark}>{item.text}</Text>,
  },
]

export default function HeterSectionListComp() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderSectionHeader={({section}) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
    fontWeight: 'bold',
  },
})
