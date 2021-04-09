import { useBackend } from '../backend';
import { Box, Button, LabeledList, Section } from '../components';
import { LabeledListItem } from '../components/LabeledList';
import { Window } from '../layouts';

export const FaxPanel = (props, context) => {
  const { act, data } = useBackend(context);
  const { is_funmin, admin_fax_list, fax_list, dat } = data;

  var dummy_fax_list = [
    {
      'name': 'Wack',
      'from_department': 'from',
      'to_department': 'To',
      'sent_at': '12345',
      'sent_by': {
        'name': 'Sender',
      },
    },
    {
      'name': 'Wack',
      'from_department': 'from',
      'to_department': 'To',
      'sent_at': '12345',
      'sent_by': {
        'name': 'Sender',
      },
    },
    {
      'name': 'Wack',
      'from_department': 'from',
      'to_department': 'To',
      'sent_at': '12345',
      'sent_by': {
        'name': 'Sender',
      },
    },
    {
      'name': 'Wack',
      'from_department': 'from',
      'to_department': 'To',
      'sent_at': '12345',
      'sent_by': {
        'name': 'Sender',
      },
    },
  ];

  return (
    <Window title="Fax Panel" width={950} height={450}>
      <Window.Content>
        <Box my={1}>
          <Button>Create Fax</Button>
        </Box>
        <Section title="Admin Faxes">
          <table>
            <thead>
              <tr>
                <th width="150px">Name</th>
                <th width="150px">From Department</th>
                <th width="150px">To Department</th>
                <th width="75px">Sent At</th>
                <th width="150px">Sent By</th>
                <th width="50px">View</th>
                <th width="50px">Reply</th>
                <th width="75px">Replied to</th>
              </tr>
            </thead>
            <tbody>
              {dummy_fax_list.map((fax) => (
                <tr>
                  <td>{fax.name}</td>
                  <td>{fax.from_department}</td>
                  <td>{fax.to_department}</td>
                  <td>{fax.sent_at}</td>
                  <td>
                    <Button>{fax.sent_by.name}</Button>
                  </td>
                  <td>
                    <Button>View</Button>
                  </td>
                  <td>
                    <Button>Reply</Button>
                  </td>
                  <td>
                    <Button>Original</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Departmental Faxes">
          <table>
            <thead>
              <tr>
                <th width="150px">Name</th>
                <th width="150px">From Department</th>
                <th width="150px">To Department</th>
                <th width="75px">Sent At</th>
                <th width="150px">Sent By</th>
                <th width="50px">View</th>
              </tr>
            </thead>
            <tbody>
              {dummy_fax_list.map((fax) => (
                <tr>
                  <td>{fax.name}</td>
                  <td>{fax.from_department}</td>
                  <td>{fax.to_department}</td>
                  <td>{fax.sent_at}</td>
                  <td>
                    <Button>{fax.sent_by.name}</Button>
                  </td>
                  <td>
                    <Button>View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </Window.Content>
    </Window>
  );
};
