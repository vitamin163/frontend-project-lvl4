import AddChannelModal from './AddChannelModal';

const modal = {
  addChannel: AddChannelModal,
};

export default (type) => modal[type];
