import React from "react";
import "./Catalog.css";
import { getPacks, getChannels, getServices } from "../../data/helper";
import BasePack from "../BasePack/BasePack";
import _ from "lodash";

const Catalog = ({packs, channels, services}) => {
  let catalogPacks, catalogChannels, catalogServices, catalogLabel;

  // Any of them is passed as props
  if(packs || channels || services) {
    // In case of current subscription
    catalogPacks = packs.map(packName => getPacks[packName]);
    catalogChannels = channels.map(channelName => getChannels[channelName]);
    catalogServices = services.map(serviceName => getServices[serviceName]);
    catalogLabel = "Subscribed";
  }
  else {
    // In case of traversing Available Catalog
    catalogPacks = getPacks;
    catalogChannels = getChannels;
    catalogServices = getServices;
    catalogLabel = "Available";
  }

  const noItem = items => {
    if(items.length === 0)
      return <h3>No Items</h3>;
  }
  return (
    <div className="Catalog">
      <h1>{catalogLabel} Catalog</h1>

      <h2>{catalogLabel} Packs</h2>
      <div className="Catalog-packs">
        {_.toArray(catalogPacks).map((pack) => (
          <BasePack pack={pack} key={pack.name} showSubscribeDetails={false} />
        ))}
        {
          noItem(_.toArray(catalogPacks))
        }
      </div>

      <h2>{catalogLabel} Channels</h2>
      <div className="Catalog-channels">
        {_.toArray(catalogChannels).map((channel) => (
          <div className="Catalog-channel-item" key={channel.name}>
            <span className="Catalog-channel-name">
              ₹ {channel.price} | {channel.name}
            </span>
          </div>
        ))}
        {
          noItem(_.toArray(catalogChannels))
        }
      </div>

      <h2>{catalogLabel} Services</h2>
      <div className="Catalog-services">
        {_.toArray(catalogServices).map((service) => (
          <div className="Catalog-service-item" key={service.name}>
            <span className="Catalog-service-name">
              ₹ {service.price} | {service.name}
            </span>
          </div>
        ))}
        {
          noItem(_.toArray(catalogServices))
        }
      </div>
    </div>
  );
};

export default Catalog;
